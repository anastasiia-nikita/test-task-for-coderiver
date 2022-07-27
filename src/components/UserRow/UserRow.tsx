import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import './UserRow.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { UpdateUser } from '../../react-app-env';

interface Props {
  user: UpdateUser,
}

export const UserRow: React.FC<Props> = ({ user }) => (
  <tr className="user-row">
    <td className="user-row__item user-row__item--width">
      <Link to={`/users/${user.id}`}>
        <div className="user-row__item-details">
          <img className="user-row__item-img" src={user.photo} alt={user.name} />

          <div className="user-row__item-details-block">
            <span className="user-row__item-title">{user.name}</span>
            <span className="user-row__item-subtitle">{user.address.city}</span>
          </div>
        </div>
      </Link>

    </td>

    <td className="user-row__item">
      <span className="user-row__item-title">{user.company.name}</span>
      <span className="user-row__item-subtitle">{user.company.bs}</span>
    </td>

    <td className="user-row__item">
      <span className="user-row__item-title">{user.email}</span>
      <span className="user-row__item-subtitle">{user.website}</span>
    </td>

    <td className="user-row__item">
      <Button borderRadius="100px" className={`button button__${user.distance}`}>
        {user.distance}
      </Button>
    </td>

    <td className="user-row__item">
      <img src="./images/dots_icon.png" alt="dots-icon" />
    </td>
  </tr>
);
