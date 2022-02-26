import auth from '@react-native-firebase/auth';

export const getUserName = () => {
  try {
    const userName = auth().currentUser?.displayName as string;
    return userName;
  } catch (err) {
    return err;
  }
};
