/** @jsx jsx */
import {useCss, useCssx, Box, Text, jsx} from '..';
import {storiesOf} from '@storybook/react';
import {BenchColorPicker} from './bench/color-picker';
import CellVirtualCss from './bench/color-picker/virtual-css';
import CellEmotion from './bench/color-picker/emotion';

declare module 'react' {
  interface DOMAttributes<T> {
      css?: any;
  }
}

storiesOf('Benchmarks|Color picker', module)
  .add('virtual-css', () => (
    <BenchColorPicker Cell={CellVirtualCss} />
  ))
  .add('emotion', () => (
    <BenchColorPicker Cell={CellEmotion} />
  ))
