/** @jsx jsx */
import {useCss, useCssx, Box, Text, jsx} from '..';
import {storiesOf} from '@storybook/react';

declare module 'react' {
  interface DOMAttributes<T> {
      css?: any;
  }
}

const hoverCss = {
  color: 'tomato',
  '&:hover': {
    color: 'orange',
  },
};

const Demo1 = () => {
  const className = useCss(hoverCss);
  return <div className={className}>Hover me!</div>;
};

const Demo1x = () => {
  const css = useCssx(hoverCss);
  return <div {...css}>Hover me!</div>;
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
  .add('useCss', () => <Demo1 />)
  .add('useCssx', () => <Demo1x />)
  .add('Buttons', () => <Demo2 />)
  .add('<Box>', () => <Box css={hoverCss}>Hover me!</Box>)
  .add('<Text>', () => <Text css={hoverCss}>Hover me!</Text>)
  .add('<div>', () => <div css={hoverCss}>Hover me!</div>)
