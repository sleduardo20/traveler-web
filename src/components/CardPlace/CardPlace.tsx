import Image from 'next/image';
import { IconCoffe, IconStarFill } from '../../constants/Icons';
import * as S from './styles';

export type CardPlaceProps = {
  rating: string;
  src: string;
  title: string;
  type: string;
};

export const CardPlace = ({ title, rating, src, type }: CardPlaceProps) => {
  return (
    <S.Container>
      <S.Ribbon>
        {IconStarFill}
        <small>{rating}</small>
      </S.Ribbon>

      <S.Image>
        <Image src={src} alt={title} layout="fill" objectFit="cover" />
      </S.Image>
      <S.Title>
        <strong>{title}</strong>
      </S.Title>

      <S.TypePlace>
        <span>{type}</span>
        {IconCoffe}
      </S.TypePlace>
    </S.Container>
  );
};
