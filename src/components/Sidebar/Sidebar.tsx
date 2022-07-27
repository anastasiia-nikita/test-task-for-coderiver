import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar: React.FC = () => (
  <aside className="App__sidebar sidebar">
    <div className="sidebar__logo-container">
      <img className="sidebar__logo" src="./images/main_logo.png" alt="logo" />
      <span className="sidebar__brand">Dashboard</span>
    </div>

    <nav className="sidebar__navigation navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/overview_logo.png" alt="overview-logo" />
            <span className="navigation__title">Overview</span>
          </a>
        </li>
        <li className="navigation__item navigation__item--active">
          <Link className="navigation__link" to="/users">
            <img className="navigation__img" src="./images/users_logo.png" alt="users-logo" />
            <span className="navigation__title">Users</span>
          </Link>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/ideas_logo.png" alt="ideas-logo" />
            <span className="navigation__title">Ideas</span>
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/contacts_logo.png" alt="contacts-logo" />
            <span className="navigation__title">Contacts</span>
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/agents_logo.png" alt="agents-logo" />
            <span className="navigation__title">Agents</span>
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/articles_logo.png" alt="articles-logo" />
            <span className="navigation__title">Articles</span>
          </a>
        </li>

        <div className="navigation__line"></div>

        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/settings_logo.png" alt="settings-logo" />
            <span className="navigation__title">Settings</span>
          </a>
        </li>
        <li className="navigation__item">
          <a className="navigation__link" href="#/">
            <img className="navigation__img" src="./images/subscription_logo.png" alt="subscription-logo" />
            <span className="navigation__title">Subscription</span>
          </a>
        </li>

      </ul>
    </nav>
  </aside>
);
