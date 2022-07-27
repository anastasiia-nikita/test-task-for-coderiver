/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './CustomCheckbox.scss';

interface Props {
  children: string,
  checked?: boolean,
}

export const CustomCheckbox: React.FC<Props> = ({ children, checked }) => (
  <>
    <input defaultChecked={checked} className="input" type="checkbox" id={children} />

    <label className="input-label" htmlFor={children}>
      {children}
    </label>
  </>
);
