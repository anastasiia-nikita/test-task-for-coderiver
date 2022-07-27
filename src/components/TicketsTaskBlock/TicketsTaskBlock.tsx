import React from 'react';
import { Tasks } from './Tasks';
import { Tickets } from './Tickets';
import './TicketsTaskBlock.scss';

export const TicketsTaskBlock: React.FC = () => (
  <div className="App__tickets-task-block tickets-task-block">
    <Tickets />
    <Tasks />
  </div>
);
