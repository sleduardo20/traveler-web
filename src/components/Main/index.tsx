import { Container, Title, Description, Illutration } from './styles';

export const Main = ({ title = 'React Avançado' }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>Traveler</Description>
      <Illutration
        src="/img/hero-illustration.svg"
        alt="Um dev com a tela do código"
      />
    </Container>
  );
};
