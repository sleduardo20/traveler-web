import { Button } from 'components/Button';
import { CardCity } from 'components/CardCity';
import { mockCardCity } from 'components/CardCity/mockCardCity';
import { Logo } from 'components/Logo';
import { Wrapper } from 'components/Wrapper';

import * as S from './styles';

export const ViewHome = () => {
  return (
    <Wrapper>
      <S.Container>
        <S.TopLeft>
          <Logo />
          <h1>Viva uma grande aventura</h1>

          <p>
            Descubra locais incríveis para se visitar em cidades maravilhosas de
            Santa Catarina
          </p>

          <Button
            size="large"
            color="orange"
            title="Descubra todos os Lugares"
          />
        </S.TopLeft>
        <S.Places>
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
          <CardCity {...mockCardCity} />
        </S.Places>
      </S.Container>
    </Wrapper>
  );
};
