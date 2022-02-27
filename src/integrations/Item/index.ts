import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';

import {
  GetTakedItems,
  GetUntakedItemsProps,
  ItemProps,
} from '../../types/item';
import { Alert } from 'react-native';

export const createNewItem = async ({
  name,
  quantity,
  price,
  createdAt,
  priorityLevel,
  itemColor,
}: ItemProps) => {
  try {
    const userId = auth().currentUser?.uid;

    await firestore()
      .collection(`${userId}`)
      .doc(`${uuid.v1() as string}-${createdAt}`)
      .set({
        name,
        price,
        quantity,
        createdAt,
        priorityLevel,
        itemColor,
        payedAt: null,
        updatedAt: null,
        takedAt: null,
      } as ItemProps);
    return true;
  } catch (err) {
    return err;
  }
};

export const getUntakedItems = ({ callback }: GetUntakedItemsProps) => {
  try {
    const userID = auth().currentUser?.uid;

    firestore()
      .collection(`${userID}`)
      .onSnapshot(snapshot => {
        const items: ItemProps[] = [];
        snapshot.docs.map(item => {
          items.push({
            id: item.id,
            ...(item.data() as ItemProps),
          });
        });
        callback(items.filter(item => item.takedAt === null));
      });
  } catch (err) {
    return err;
  }
};

export const getTakedItems = ({ callback }: GetTakedItems) => {
  try {
    const userID = auth().currentUser?.uid;
    firestore()
      .collection(`${userID}`)
      .onSnapshot(snapshot => {
        const items: ItemProps[] = [];
        snapshot.docs.forEach(item => {
          const itemData = item.data() as ItemProps;
          if (itemData.takedAt !== null) {
            return items.push({
              id: item.id,
              ...item.data(),
            } as ItemProps);
          } else {
            return;
          }
        });
        callback(items);
      });
  } catch (err) {
    return err;
  }
};

export const handleBackItem = (id: string) => {
  try {
    const userID = auth().currentUser?.uid;
    firestore()
      .collection(`${userID}`)
      .doc(id)
      .update({
        takedAt: null,
        updatedAt: new Date().toISOString(),
      } as ItemProps);
  } catch (err) {
    return err;
  }
};

export const handleDeleteItem = (id: string) => {
  const userID = auth().currentUser?.uid;
  Alert.alert('teste de aapagar');
  try {
    firestore().collection(`${userID}`).doc(id).delete();
  } catch (err) {
    return err;
  }
};

export const handleTakeItem = (id: string) => {
  const userID = auth().currentUser?.uid;
  try {
    firestore()
      .collection(`${userID}`)
      .doc(id)
      .update({
        takedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as ItemProps);
  } catch (err) {
    return err;
  }
};

export const handleSetItemPrice = (id: string, price: number) => {
  const userID = auth().currentUser?.uid;
  try {
    firestore()
      .collection(`${userID}`)
      .doc(id)
      .update({
        price,
        takedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      } as ItemProps);
  } catch (err) {
    return err;
  }
};
