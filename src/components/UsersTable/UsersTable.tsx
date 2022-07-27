import React, { useState, useEffect } from 'react';
import { UserRow } from './UserRow';
import './UsersTable.scss';
import { getUser } from '../../api/api';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { UpdateUser } from '../../react-app-env';

export const UsersTable = () => {
  const [users, setUsers] = useState<UpdateUser []>([]);

  useEffect(() => {
    try {
      getUser()
        .then(usersFromServer => setUsers(usersFromServer));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App__users-container users-container">
      <div className="users-container__header">
        <h2 className="users-container__header-title">All users</h2>
        <div className="users-container__header-sort">
          <img className="users-container__header-sort-img" src="./images/sort_icon.png" alt="sort-icon" />
          <span className="users-container__header-sort-name">Sort</span>
        </div>
      </div>

      <table className="users-container__table table">
        <thead className="table__thead">
          <tr className="table__tr">
            <th className="table__th">User details</th>
            <th className="table__th">Company name</th>
            <th className="table__th">Email</th>
            <th className="table__th">Distance</th>
            <th className="table__th"> </th>
          </tr>
        </thead>

        <tbody className="table__tbody">
          {users.map(user => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
