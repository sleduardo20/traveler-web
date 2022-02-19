import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  title?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  color?: 'orange' | 'blueLow' | 'green';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = 'medium',
  icon,
  color = 'blueLow',
  title,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container {...rest} size={size} color={color}>
      {!!icon && icon}
      {!!title && <span>{title}</span>}
      {!!children && children}
    </S.Container>
  );
};
