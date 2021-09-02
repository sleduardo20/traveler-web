import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type ButtonProps = {
  title?: string;
  icon?: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
  color?: 'orange' | 'blueLow' | 'green';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = 'medium',
  icon,
  color = 'blueLow',
  title,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container {...rest} size={size} color={color}>
      {!!icon && icon}
      {!!title && <span>{title}</span>}
    </S.Container>
  );
};
