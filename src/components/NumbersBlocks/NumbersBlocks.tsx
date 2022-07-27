import React from 'react';
import { ActivityBlock } from './ActivityBlock';
import './NumbersBlocks.scss';
import { blocks } from './NumbersBlocks.data';

export const NumbersBlocks: React.FC = () => (
  <div className="App__numbers-blocks numbers-blocks">
    {blocks.map(block => (
      <ActivityBlock key={block.status} block={block} />
    ))}
  </div>
);
