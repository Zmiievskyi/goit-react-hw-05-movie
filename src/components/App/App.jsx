import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Home } from '../../pages/Home/Home';
// import { Movies } from '../../pages/Movies/Movies';
// import { Layout } from 'components/Layout/Layout';
// import { MovieItem } from 'components/MovieItem/MovieItem';
// import { Cast } from 'components/Cast/Cast';
// import { Review } from 'components/Review/Review';
const Home = lazy(() => import('../../pages/Home/Home'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));
const Layout = lazy(() => import('components/Layout/Layout'));
const MovieItem = lazy(() => import('components/MovieItem/MovieItem'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Review = lazy(() => import('components/Review/Review'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies/:movieId" element={<MovieItem />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;