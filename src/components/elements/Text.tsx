import React from 'react';
import styled from 'styled-components/native';

export default function Text(props: TextProps) {
  return <T color={props.color}>{props.children}</T>;
}

type TextProps = {
  color?: string;
  size?: string;
  children: string;
};

const T = styled.Text<TextProps>`
  color: ${props => props.color || '#fff'};
  font-weight: bold;
  font-size: ${props => (props.size === 'big' ? '24px' : '16px')};
`;
