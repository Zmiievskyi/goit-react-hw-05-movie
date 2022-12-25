// import { Routes, Route, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// const { Link, Section } = lazy(() => import('./HomeStyled'));
import { Link, Section } from './HomeStyled';
import ThemoviApi from 'components/ThemoviApi/ThemoviApi';

const Home = () => {

   const [list, setList] = useState([]);

   useEffect(() => {
     const list = async () => {
       const movieList = await ThemoviApi.getMovieList();
       setList(movieList);
     };
     list();
   }, []);

  return (
    <Section>
      <ul>
        {list.map(item => (
          <Link key={item.id} to={`movies/${item.id}`}>
            {item.title}
          </Link>
        ))}
      </ul>
    </Section>
  );
};
export default Home;