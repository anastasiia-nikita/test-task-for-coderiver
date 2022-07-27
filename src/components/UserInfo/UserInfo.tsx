import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserInfo.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { UpdateUser } from '../../react-app-env';
import { getCurrentUser } from '../../api/api';

export const UserInfo: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UpdateUser | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      getCurrentUser(+id)
        .then(userFromServer => setUser(userFromServer));
    }
  }, [id]);

  return (
    <div className="user-info">
      <div className="user-info__img-block">
        <img className="user-info__img" src={user?.photo} alt={user?.name} />
      </div>

      <h3 className="user-info__title">{user?.name}</h3>
      <span className="user-info__subtitle">{user?.company.catchPhrase}</span>

      <div className="user-info__contact-block">
        <h3 className="user-info__contact-title">Address</h3>
        <span className="user-info__contact-info user-info__contact-info--margin-0">
          {`${user?.address.street}, ${user?.address.suite},`}
        </span>
        <span className="user-info__contact-info">
          {`${user?.address.city}, ${user?.address.zipcode}`}
        </span>

        <h3 className="user-info__contact-title">Phone</h3>
        <span className="user-info__contact-info">{user?.phone}</span>

        <h3 className="user-info__contact-title">Website</h3>
        <a className="user-info__contact-info user-info__contact-info--link" href="#/">{user?.website}</a>
      </div>
    </div>
  );
};
