/** @jsx jsx */
const {jsx} = require('@emotion/core');

const Cell = ({color, hover, active}) => {
  const blockCss = {
    background: `rgb(${color.r},${color.g},${color.b})`,
    width: '20px',
    height: '20px',
    margin: '1px',
    float: 'left',
    ':hover': {
      background: `rgb(${hover.r},${hover.g},${hover.b})`,
    },
    ':active': {
      background: `rgb(${active.r},${active.g},${active.b})`,
    }
  };
  return jsx('div', {css: blockCss}) as any;
};

export default Cell;
