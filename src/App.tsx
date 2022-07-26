import React from 'react';
import './App.scss';
import { Header } from './components/Header';
import { NumbersBlocks } from './components/NumbersBlocks';
import { Sidebar } from './components/Sidebar';
import { TicketsTaskBlock } from './components/TicketsTaskBlock';
import { UsersTable } from './components/UsersTable';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />

      <main className="App__main">
        <Header />
        <NumbersBlocks />
        <UsersTable />
        <TicketsTaskBlock />
      </main>
    </div>
  );
};
