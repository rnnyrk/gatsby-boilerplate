import { ThemedCssFunction } from 'styled-components';

import { theme } from './theme';
import { sizes } from './utils';

export type Theme = typeof theme;

type MediaQueryType = ThemedCssFunction<Theme>;

export type MediaSizes = keyof typeof sizes;

export type MediaQueryUtils = {
  [size in MediaSizes]: MediaQueryType;
};

type DeviceQueryUtils = {
  ie: MediaQueryType;
};

export type MediaUtils = MediaQueryUtils & DeviceQueryUtils;
