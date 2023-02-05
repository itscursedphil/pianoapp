import React from 'react';
import styled from 'styled-components';
import { layout, position } from 'styled-system';

interface KeyProps {
  width: number;
  noteName: string;
  sharp?: boolean;
  root?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const KeyContainer = styled.div<Pick<KeyProps, 'width' | 'sharp'>>`
  width: ${({ width }) => width}%;
  flex-shrink: 0;
  margin: 0 ${({ sharp, width }) => (sharp ? `-${width / 2}%` : 0)};
  position: relative;
  z-index: ${({ sharp }) => (sharp ? 1 : 0)};
  pointer-events: none;
`;

const KeyInner = styled.div<Pick<KeyProps, 'sharp' | 'root' | 'active'>>`
  position: relative;
  pointer-events: initial;
  border-radius: 0 0 4px 4px;

  ${({ sharp, theme }) =>
    layout({
      theme,
      height: 0,
      width: [
        `calc(100% - ${sharp ? 8 : 4}px)`,
        `calc(100% - ${sharp ? 16 : 4}px)`,
      ],
    })}
  ${({ sharp, theme }) =>
    position({ theme, left: [`${sharp ? 2 : 0}px`, `${sharp ? 6 : 0}px`] })}
padding-bottom: ${({ sharp }) => (sharp ? '280%' : '400%')};
  background: ${({ sharp }) => (sharp ? 'black' : 'white')};
  outline: ${({ sharp }) => (sharp ? 0 : '4px')} solid #f2f367;

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    border-radius: 50%;
    transform: translateX(-50%);

    ${({ sharp, theme }) =>
      layout({
        theme,
        width: [`${sharp ? 65 : 50}%`],
        height: [`${sharp ? 16 : 11.5}%`],
      })}
    ${({ sharp, theme }) => position({ theme, bottom: [`${sharp ? 5 : 4}%`] })}
  background: ${({ root }) => (root ? '#de4d01' : '#7243fe')};
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;

const NoteValue = styled.span`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: bold;
  font-size: 0.8rem;
`;

const Key: React.FC<KeyProps> = ({
  width,
  sharp,
  root,
  active,
  noteName,
  onClick,
}) => (
  <KeyContainer width={width} sharp={sharp}>
    <NoteValue>{noteName}</NoteValue>
    <KeyInner sharp={sharp} root={root} active={active} onClick={onClick} />
  </KeyContainer>
);

export default Key;
