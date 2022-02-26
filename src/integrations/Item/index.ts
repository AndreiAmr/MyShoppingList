import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';

import { GetUntakedItemsProps, ItemProps } from '../../types/item';
const userID = auth().currentUser?.uid;

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
        callback(items);
      });
  } catch (err) {
    return err;
  }
};

export const handleDeleteItem = (id: string) => {
  try {
    firestore().collection(`${userID}`).doc(id).delete();
  } catch (err) {
    console.log(err);
    return err;
  }
};
