# virtual-css

Virtual CSS renderer. Renders only CSS declaration that changed.

```shell
npm i virtual-css
```

- Inline CSS with pseudo-selectors and media queries


## Usage

As React hook:

```js
import {useCss} from 'virtual-css';

const Demo = () => {
  const className = useCss({
    color: 'tomato',
    '&:hover': {
      color: 'orange',
    },
  });

  return <div className={className}>Hover me!</div>;
};
```

As styled blocks:

```js
import {Box, Text} from 'virtual-css';

const myCss = {
  color: 'tomato',
  '&:hover': {
    color: 'orange',
  },
};

<Box css={css}>Hover me!</Box>
<Text css={css}>Hover me!</Text>
```

As inline JSX:

```js
/** @jsx jsx */
import {jsx} from 'virtual-css';

const myCss = {
  color: 'tomato',
  '&:hover': {
    color: 'orange',
  },
};

<div css={css}>Hover me!</div>
```

If you are using TypeScript, include this type override:

```ts
declare module 'react' {
  interface DOMAttributes<T> {
      css?: any;
  }
}
```


## License

[Unlicense](LICENSE) &mdash; public domain.
