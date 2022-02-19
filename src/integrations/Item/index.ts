import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import uuid from 'react-native-uuid';

import { NewItemProps } from '../../types/item';

export const createNewItem = async ({
  name,
  note,
  quantity,
  price,
  createdAt,
}: NewItemProps) => {
  try {
    const userId = auth().currentUser?.uid;

    await firestore()
      .collection(`${userId}`)
      .doc(`${uuid.v1() as string}-${createdAt}`)
      .set({
        name,
        note,
        price,
        quantity,
        createdAt,
        payedAt: null,
        updatedAt: null,
      } as NewItemProps);
    return true;
  } catch (err) {
    console.log(err + 'salve salve');
    throw new Error('meu erro teste');
  }
};
