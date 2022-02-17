import Link from 'next/link';
import { Button } from 'components/Button';
import { CardCity } from 'components/CardCity';

import { Header } from 'components/Header';
import { Wrapper } from 'components/Wrapper';

import { mockCardCity } from 'mocks/CardCity';
import * as S from './styles';

export const ViewHome = () => {
  return (
    <>
      <Header hasBorder={false} />
      <Wrapper>
        <S.Container>
          <S.TopLeft>
            <h1>Viva uma grande aventura</h1>

            <p>
              Descubra locais incríveis para se visitar em cidades maravilhosas
              de Santa Catarina
            </p>

            <Link href="/list-of-cities">
              <a>
                <Button
                  size="large"
                  color="orange"
                  title="Descubra todos os Lugares"
                />
              </a>
            </Link>
          </S.TopLeft>
          <S.Places>
            <S.PlacesColumnLeft>
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
            </S.PlacesColumnLeft>

            <S.PlacesColumnRigth>
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
              <CardCity {...mockCardCity} />
            </S.PlacesColumnRigth>
          </S.Places>
        </S.Container>
      </Wrapper>
    </>
  );
};
