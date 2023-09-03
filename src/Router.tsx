import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './views/ProjectDetail';
import Homepage from './views/Homepage';

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/project/:project" element={<ProjectDetail />} />
    </Routes>
  );
}

export default Router;
