import Link from 'next/link';

import Header from 'components/Header';
import CardCity from 'components/CardCity';
import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import { Cities } from 'model/cities';
import * as S from './styles';

export const ViewHome = ({ cities }: Cities) => {
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
              {cities.length > 0 && cities.map(city => <CardCity {...city} />)}
            </S.PlacesColumnLeft>

            <S.PlacesColumnRigth>
              {cities.length > 0 && cities.map(city => <CardCity {...city} />)}
            </S.PlacesColumnRigth>
          </S.Places>
        </S.Container>
      </Wrapper>
    </>
  );
};
