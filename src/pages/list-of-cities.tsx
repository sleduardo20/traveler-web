import { Cities } from 'model/cities';
import { ViewListOfCities } from 'views/ListOfCities';
import { responseCardCities } from '../mocks/CardCity';

const ListOfCities = ({ cities }: Cities) => {
  return <ViewListOfCities {...responseCardCities} />;
};

export default ListOfCities;
