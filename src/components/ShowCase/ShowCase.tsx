import Image from 'next/image';
import { IconAlert } from '../../constants/Icons';
import * as S from './styles';

export type ShowCaseProps = {
  title: string;
  description: string;
  src: string;
  detach?: boolean;
};

export const ShowCase = ({
  title,
  description,
  src,
  detach = true,
}: ShowCaseProps) => {
  return (
    <S.Container>
      <S.Info>
        {!!detach && (
          <span>
            {IconAlert}
            Destaque
          </span>
        )}
        <h2>{title}</h2>
        <p>{description}</p>
      </S.Info>
      <S.Image>
        <Image src={src} alt={title} layout="fill" objectFit="cover" />
      </S.Image>
    </S.Container>
  );
};
