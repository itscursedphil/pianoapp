import styled from 'styled-components';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

export interface TextProps extends TypographyProps, SpaceProps {
  inline?: boolean;
}

const Text = styled.p.attrs<TextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p',
}))<TextProps>`
  ${typography}
  ${space}
`;

export default Text;
