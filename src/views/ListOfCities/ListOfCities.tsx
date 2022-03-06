import { useEffect, useState } from 'react';

import CardCity from 'components/CardCity';
import EmptyState from 'components/EmptyState';
import Header from 'components/Header';
import InputSearch from 'components/InputSearch';
import Wrapper from 'components/Wrapper';

import { Cities } from 'model/cities';
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
          {cities.length ? (
            cities.map(city => <CardCity key={city.name} {...city} />)
          ) : (
            <EmptyState />
          )}
        </S.PlacesSection>
      </Wrapper>
    </S.Container>
  );
};
