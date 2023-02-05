import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`;

export default Box;
