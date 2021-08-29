import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  title: string;
  size?: 'large' | 'small';
  color?: 'orange' | 'blueLow';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = 'small',
  color = 'blueLow',
  title,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container {...rest} size={size} color={color}>
      <span>{title}</span>
    </S.Container>
  );
};
