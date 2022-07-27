import React from 'react';
import './Tickets.scss';

export const Tickets: React.FC = () => (
  <div className="tickets">
    <div className="tickets__header">
      <div className="tickets__header-info">
        <h2 className="tickets__header-info-title">Unresolved tickets</h2>
        <span className="tickets__header-info-group">Group: </span>
        <span className="tickets__header-info-support">Support</span>
      </div>

      <a href="#/" className="tickets__header-view">View details</a>
    </div>

    <div className="tickets__item">
      <p className="tickets__item-title">Waiting on Feature Request</p>
      <span className="tickets__item-number">4238</span>
    </div>
    <div className="tickets__item">
      <p className="tickets__item-title">Awaiting Customer Response</p>
      <span className="tickets__item-number">1005</span>
    </div>
    <div className="tickets__item">
      <p className="tickets__item-title">Awaiting Developer Fix</p>
      <span className="tickets__item-number">914</span>
    </div>
    <div className="tickets__item">
      <p className="tickets__item-title">Pending</p>
      <span className="tickets__item-number">201</span>
    </div>
  </div>
);
