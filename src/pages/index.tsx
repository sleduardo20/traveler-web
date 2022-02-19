import { Cities } from 'model/cities';
import { ViewHome } from 'views/Home';

import { responseCardCities } from '../mocks/CardCity';

const Home = ({ cities }: Cities) => {
  return <ViewHome {...responseCardCities} />;
};

export default Home;
