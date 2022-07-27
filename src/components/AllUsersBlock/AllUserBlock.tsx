import React from 'react';
import { TicketsTaskBlock } from '../TicketsTaskBlock';
import { UsersTable } from '../UsersTable';

export const AllUsersBlock: React.FC = () => (
  <>
    <UsersTable />
    <TicketsTaskBlock />
  </>
);
