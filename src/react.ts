import * as React from 'react';
import createUseCss from './createUseCss';
import createUseDataCss from './createUseDataCss';
import styled from './styled';
import {H} from './jsx';

const {createElement, useMemo, useLayoutEffect} = React;

const useCss = createUseCss(useMemo, useLayoutEffect);
const useCssx = createUseDataCss(useCss);
const Box = styled(useCss)(createElement)('div');
const Text = styled(useCss)(createElement)('span');
const h = H(createElement, useCss);
const jsx = h;

export {
  useCss,
  useCssx,
  styled,
  Box,
  Text,
  h,
  jsx,
};
