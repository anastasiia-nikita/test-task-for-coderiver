import React from 'react';
import './CustomButton.scss';

interface Props {
  children: string,
  className: string,
  borderRadius: string,
}

export const Button: React.FC<Props> = ({ children, className, borderRadius }) => (
  <button
    type="button"
    className={className}
    style={{ borderRadius }}
  >
    {children}
  </button>
);
