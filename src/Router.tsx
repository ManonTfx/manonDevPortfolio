// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:work" element={<Homepage />} />
    </Routes>
  );
}

export default Router;
