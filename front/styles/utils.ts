import { css } from "styled-components";
import {devicesMaxWidth} from './variables';

export const SrOnly = () => css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
`

export const MessageDetailsBorder = () => css`
  padding: 28px;
  @media ${devicesMaxWidth.tablet} {
    padding: 20px;
  }
`
