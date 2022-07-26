import React from 'react';
import { UserRow } from '../UserRow';
import './UsersTable.scss';

export const UsersTable = () => {
  return (
    <div className="users-container">
      <div className="users-container__header">

      </div>
      <table className="users-container__table table">
        <thead>
          <tr>
            <th>User details</th>
            <th>Company name</th>
            <th>Email</th>
            <th>Distance</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>
    </div>
  );
};
