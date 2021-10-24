import { useSelector } from 'react-redux';

const Home = () => {
  const modalState = useSelector(state => state);
  console.log(modalState);
  return <h1>Eduardo</h1>;
};

export default Home;
