import Image from 'next/image';
import * as S from './styles';

export const EmptyState = () => {
  return (
    <S.Container>
      <Image src="./img/empty-state.svg" width={80} height={80} />
      <h1>
        Sem resultados.
        <br />
        Tente novamente uma nova busca
      </h1>
    </S.Container>
  );
};
