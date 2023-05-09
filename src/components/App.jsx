import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from '../pages/HomePage';
import TweetsPage from 'pages/TweetsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />}/>
      </Route>
    </Routes>
  );
};
