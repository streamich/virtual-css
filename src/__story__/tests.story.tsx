import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useCss} from '..';

const Demo1 = () => {
  const className = useCss({
    color: 'tomato',
    '&:hover': {
      color: 'orange',
    },
  });
  return <div className={className}>Hover me!</div>;
};

const Button = ({ghost = false, children}) => {
  const buttonClass = useCss({
    background: '#07f',
    color: '#fff',
    textTransform: 'uppercase',
    border: 0,
    borderRadius: '5px',
    padding: '12px 50px',
    cursor: 'pointer',
    outline: 'none',
    transition: 'transform .1s',
    fontFamily: 'sans-serif',
    fontSize: '13px',
    letterSpacing: '1px',
    ...(ghost ? {
      background: '#fff',
      border: '1px solid #07f',
      color: '#07f',
    } : null),
    '&:hover': {
      background: '#000',
      ...(ghost ? {
        background: '#07f',
        color: '#fff',
      } : null),
    },
    '&:active': {
      transform: 'scale(.96)',
    },
    '@media only screen and (max-width: 600px)': {
      padding: '10px',
    },
  });

  return <button className={buttonClass}>{children}</button>;
};

const Demo2 = () => {
  const blockClass = useCss({
    textAlign: 'center',
    padding: '40px',
  });

  return (
    <div className={blockClass}>
      <Button>Click me!</Button>
      <br />
      <br />
      <Button ghost>Do you see me?</Button>
      <br />
      <br />
      <p>Resize screen to see media query in action.</p>
    </div>
  );
};

storiesOf('Tests', module)
  .add('Pseudo selector', () => <Demo1 />)
  .add('Buttons', () => <Demo2 />)
