import React, { PropsWithChildren } from 'react';
// eslint-disable-next-line camelcase
import { Sen } from '@next/font/google';
import styled from 'styled-components';
import { space } from 'styled-system';

const font = Sen({ subsets: ['latin'], weight: ['400', '700'] });

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  ${({ theme }) => space({ theme, px: [4, 4, 6], mb: [5] })}
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <PageWrapper className={font.className}>{children}</PageWrapper>
);

export default Layout;
