import { CardCity } from 'components/CardCity';
import { Header } from 'components/Header';
import { InputSearch } from 'components/InputSearch';
import { Wrapper } from 'components/Wrapper';
import { mockCardCity } from 'mocks/CardCity';
import { Cities } from 'model/cities';
import * as S from './styles';

export const ViewListOfCities = ({ cities }: Cities) => {
  return (
    <S.Container>
      <Header hasBorder>
        <form action="">
          <InputSearch name="search" placeholder="Qual cidade você procura ?" />
        </form>
      </Header>
      <Wrapper>
        <S.TopSection>
          <h1>Selecione uma cidade</h1>

          <S.SortingOptions>
            <S.WrapperOption>
              <span className="active">Todas</span>
              <span>Mais acessadas</span>
              <span>A-Z</span>
            </S.WrapperOption>
          </S.SortingOptions>
        </S.TopSection>
        <S.PlacesSection>
          {cities.length > 0 && cities.map(city => <CardCity {...city} />)}
        </S.PlacesSection>
      </Wrapper>
    </S.Container>
  );
};
