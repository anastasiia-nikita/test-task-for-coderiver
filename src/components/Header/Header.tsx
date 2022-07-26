import React from 'react';
import './Header.scss';

export const Header: React.FC = () => (
  <header className="App__header header">
    <h1 className="header__title">Users</h1>
    <div className="header__container">
      <div className="header__img-container">
        <img className="header__img" src="./images/search_icon.png" alt="search-icon" />
        <img className="header__img" src="./images/notification_icon.png" alt="notification-icon" />
      </div>

      <div className="header__account-container">
        <span className="header__account-title">Jones Ferdinand</span>
        <img className="header__account-img" src="./images/account_photo.png" alt="account-img" />
      </div>
    </div>
  </header>
);
