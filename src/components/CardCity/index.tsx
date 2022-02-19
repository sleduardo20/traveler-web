import Image from 'next/image';
import * as S from './styles';

export type CardCityProps = {
  size?: 'normal' | 'large';
  src: string;
  name: string;
  places: number;
};

export const CardCity = ({
  size = 'normal',
  src,
  name,
  places,
}: CardCityProps) => {
  return (
    <S.Container size={size}>
      <S.Image size={size}>
        <Image src={src} layout="fill" objectFit="cover" />
      </S.Image>
      <S.Place size={size}>
        <strong>{name}</strong>
        <span>
          {places}
          {places > 1 ? ' locais' : ' local'}
        </span>
      </S.Place>
    </S.Container>
  );
};
