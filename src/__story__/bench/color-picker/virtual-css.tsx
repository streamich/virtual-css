import * as React from 'react';
import {useCss} from '../../../react';

const Cell = ({color, hover, active}) => {
  const blockClass = useCss({
    background: `rgb(${color.r},${color.g},${color.b})`,
    width: '20px',
    height: '20px',
    margin: '1px',
    float: 'left',
    '&:hover': {
      background: `rgb(${hover.r},${hover.g},${hover.b})`,
    },
    '&:active': {
      background: `rgb(${active.r},${active.g},${active.b})`,
    }
  });
  return <div className={blockClass} />;
};

export default Cell;
