import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { NumbersBlocks } from '../NumbersBlocks';
import { Sidebar } from '../Sidebar';

export const Layout: React.FC = () => (
  <>
    <Sidebar />

    <main className="App__main">
      <Header />
      <NumbersBlocks />

      <Outlet />
    </main>
  </>
);
