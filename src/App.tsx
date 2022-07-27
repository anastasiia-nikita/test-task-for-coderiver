import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { Layout } from './components/Layout';
import { AllUsersBlock } from './components/AllUsersBlock';
import { UserInfo } from './components/UserInfo';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllUsersBlock />} />
          <Route path="users" element={<Navigate to="/" />} />
          <Route path="users/:id" element={<UserInfo />} />
        </Route>
      </Routes>
    </div>
  );
};
