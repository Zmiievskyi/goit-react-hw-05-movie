import { useEffect, useState } from 'react';
// import { Box } from '@mui/system';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Link } from '../Home/HomeStyled';
import { ThemoviApi } from 'components/ThemoviApi/ThemoviApi';

export const Movies = () => {
  const [list, setList] = useState('');
  const [params, setParams] = useSearchParams();

  const location = useLocation();
  const movieName = params.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    try {
      const movieSearch = async () => {
        const movie = await ThemoviApi.searchMovie(movieName);
        console.log(movie);
        setList(movie.results);
      };
      movieSearch();
    } catch (error) {
      console.log(error);
    }
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('before fetch');
    const name = e.target.elements.query.value;
    setParams({ query: name });
    console.log('after fetch');
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input name="query" defaultValue={movieName} />
        <button type="submit">search</button>
      </form>
      {list && (
        <ul>
          {list.map(item => (
            <Link
              key={item.id}
              to={`/movies/${item.id}`}
              state={{ from: location }}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};
