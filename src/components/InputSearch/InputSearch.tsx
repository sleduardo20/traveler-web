import { InputHTMLAttributes } from 'react';
import { IconClose, IconSearch } from '../../constants/Icons';
import * as S from './styles';

export type InputSearchProps = {
  name: string;
  isFilled: boolean;
  handleClear: () => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputSearch = ({
  name,
  handleClear,
  isFilled,
  ...rest
}: InputSearchProps) => {
  return (
    <S.Container>
      <S.Search isFilled={isFilled}>{IconSearch}</S.Search>
      <input name={name} {...rest} type="text" />
      <S.Close onClick={handleClear} isFilled={isFilled}>
        {IconClose}
      </S.Close>
    </S.Container>
  );
};
