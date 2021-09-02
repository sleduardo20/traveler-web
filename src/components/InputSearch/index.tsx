import { InputHTMLAttributes, useState } from 'react';
import { IconClose, IconSearch } from '../../constants/Icons';
import * as S from './styles';

export type InputSearchProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const InputSearch = ({ name, ...rest }: InputSearchProps) => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
  };

  return (
    <S.Container>
      <S.Search isFilled={!!value}>{IconSearch}</S.Search>
      <input
        name={name}
        {...rest}
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <S.Close onClick={handleClear} isFilled={!!value}>
        {IconClose}
      </S.Close>
    </S.Container>
  );
};
