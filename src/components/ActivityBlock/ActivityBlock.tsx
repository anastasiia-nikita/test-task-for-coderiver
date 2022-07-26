import React from 'react';
import './ActivityBlock.scss';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { ActivBlock } from '../../react-app-env';

interface Props {
  block: ActivBlock;
}

export const ActivityBlock: React.FC<Props> = ({ block }) => (
  <div className="activity-block">
    <span className="activity-block__title">{block.status}</span>
    <span className="activity-block__number">{block.number}</span>
  </div>
);
