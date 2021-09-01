import Image from 'next/image';
import * as S from './styles';

export type CardProps = {
  size?: 'normal' | 'large';
  src: string;
  city: string;
  places: number;
};

export const Card = ({ size = 'normal', src, city, places }: CardProps) => {
  return (
    <S.Container size={size}>
      <S.Image size={size}>
        <Image src={src} layout="fill" objectFit="cover" />
      </S.Image>
      <S.Place size={size}>
        <strong>{city}</strong>
        <span>
          {places}
          {places > 1 ? ' locais' : ' local'}
        </span>
      </S.Place>
    </S.Container>
  );
};
