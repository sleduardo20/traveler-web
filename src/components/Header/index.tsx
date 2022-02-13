import { Button } from 'components/Button';
import { Logo } from 'components/Logo';
import { Wrapper } from 'components/Wrapper';
import * as S from './styles';

type HeaderProps = {
  children?: React.ReactNode;
  hasBorder?: boolean;
};

export const Header = ({ hasBorder = false, children }: HeaderProps) => {
  return (
    <S.Container hasBorder={hasBorder}>
      <Wrapper>
        <S.Header>
          <Logo />
          {!!children && { children }}
          <Button color="blueLow" size="medium" title="Acesso Restrito" />
        </S.Header>
      </Wrapper>
    </S.Container>
  );
};
