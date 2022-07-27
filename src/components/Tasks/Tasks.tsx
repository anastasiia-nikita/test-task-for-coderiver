import React from 'react';
import { Button } from '../Button';
import { CustomCheckbox } from '../CustomCheckbox';
import './Tasks.scss';

export const Tasks = () => (
  <div className="tasks">
    <div className="tasks__header">
      <div className="tasks__header-info">
        <h2 className="tasks__header-info-title">Tasks</h2>
        <span className="tasks__header-info-group">Today</span>
      </div>

      <a href="#/" className="tasks__header-view">View all</a>
    </div>

    <div className="tasks__item">
      <p className="tasks__item-title">Create new task</p>
      <img className="tasks__item-img" src="./images/plus_icon.png" alt="plus-icon" />
    </div>

    <div className="tasks__item">
      <CustomCheckbox>
        Finish ticket update
      </CustomCheckbox>

      <Button borderRadius="8px" className="button button__low">
        Urgent
      </Button>
    </div>

    <div className="tasks__item">
      <CustomCheckbox>
        Create new ticket example
      </CustomCheckbox>

      <Button borderRadius="8px" className="button button__normal">
        New
      </Button>
    </div>

    <div className="tasks__item">
      <CustomCheckbox checked>
        Update ticket report
      </CustomCheckbox>

      <Button borderRadius="8px" className="button button__default">
        Default
      </Button>
    </div>
  </div>
);
