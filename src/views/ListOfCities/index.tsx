import { Header } from 'components/Header';
import { InputSearch } from 'components/InputSearch';
import { Wrapper } from 'components/Wrapper';
import * as S from './styles';

export const ViewListOfCities = () => {
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
      </Wrapper>
    </S.Container>
  );
};
