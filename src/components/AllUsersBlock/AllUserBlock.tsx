import React from 'react';
import { TicketsTaskBlock } from '../TicketsTaskBlock';
import { UsersTable } from '../UsersTable';
import './AllUsersBlock.scss';

export const AllUsersBlock: React.FC = () => (
  <div>
    <UsersTable />
    <TicketsTaskBlock />
  </div>
);
