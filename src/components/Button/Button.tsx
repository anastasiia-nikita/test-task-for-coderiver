import React from 'react';
// import { buttonRedColor, buttonYellowColor, buttonGreenColor } from '../../utils/_vars.scss';
import './Button.scss';

// eslint-disable-next-line no-shadow
enum DistanceTypes {
  Normal = 'normal',
  Low = 'low',
  High = 'high',
}

interface Props {
  children: string,
  distance: string,
}

const chooseButtonColor = (distance: string) => {
  switch (distance) {
    case DistanceTypes.Low:
      return { backgroundColor: '#FEC400' };

    case DistanceTypes.High:
      return { backgroundColor: '#F12B2C' };

    case DistanceTypes.Normal:
      return { backgroundColor: '#29CC97' };

    default:
      return undefined;
  }
};

export const Button: React.FC<Props> = ({ children, distance }) => (
  <button
    type="button"
    className="button"
    style={chooseButtonColor(distance)}
  >
    {children}
  </button>
);
