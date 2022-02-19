import CardCity from 'components/CardCity';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import Wrapper from 'components/Wrapper';

import { Cities } from 'model/cities';
import { useEffect, useState } from 'react';
import * as S from './styles';

export const ViewListOfCities = ({ cities }: Cities) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <S.Container>
      <Header hasBorder>
        <form action="">
          <InputSearch
            name="search"
            placeholder="Qual cidade você procura ?"
            onChange={event => setSearch(event.target.value)}
            value={search}
            isFilled={!!search}
            handleClear={() => setSearch('')}
          />
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
          {cities.map(city => (
            <CardCity key={city.name} {...city} />
          ))}
        </S.PlacesSection>
      </Wrapper>
    </S.Container>
  );
};
