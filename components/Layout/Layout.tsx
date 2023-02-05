import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  ${({ theme }) => space({ theme, px: [4, 4, 6] })}
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <PageWrapper>{children}</PageWrapper>
);

export default Layout;
