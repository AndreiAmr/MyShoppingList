import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';

import { GetUntakedItemsProps, ItemProps } from '../../types/item';

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

export const getUntakedItems = ({}: GetUntakedItemsProps) => {
  try {
    // const userID = auth().currentUser?.uid;
    // firestore();
    // .collection(`${userID}`)
    // .onSnapshot(snapshot => {
    //   const allList = snapshot.docs.map(doc => {
    //     const {
    //       createdAt,
    //       name,
    //       note,
    //       payedAt,
    //       price,
    //       quantity,
    //       takedAt,
    //       updatedAt,
    //     } = doc.data() as any;
    //     return {
    //       id: doc.id,
    //       createdAt,
    //       name,
    //       note,
    //       payedAt,
    //       price,
    //       quantity,
    //       takedAt,
    //       updatedAt,
    //     };
    //   }) as ItemProps[];
    //   const data = allList.filter(item => item.takedAt === null);
    //   callback(data as ItemProps[]);
    // });
  } catch (err) {
    return err;
  }
};
