// eslint-disable-next-line import/extensions, import/no-unresolved
import { User, UpdateUser, AdditionalInfo } from '../react-app-env';

export const getUsersPhoto = async (): Promise<AdditionalInfo []> => {
  const response = await fetch('usersAdditionalInfo.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return response.json();
};

export const getUser = async (): Promise<UpdateUser[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const usersFromServer = await response.json();
  const additionalFromServer = await getUsersPhoto();
  let index = 0;

  const userWithInfo = usersFromServer.slice(0, 8).map((user: User) => {
    const updateUser = {
      ...user,
      photo: additionalFromServer[index].photo,
      distance: additionalFromServer[index].distance,
    };

    index += 1;

    return updateUser;
  });

  return userWithInfo;
};

export const getCurrentUser = async (userId: number): Promise<UpdateUser | null> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const userFromServer = await response.json();
  const additionalFromServer = await getUsersPhoto();

  const updateUser = {
    ...userFromServer,
    photo: additionalFromServer[userId - 1].photo,
    distance: additionalFromServer[userId - 1].distance,
  };

  return updateUser;
};
