import ReactDOM from 'react-dom/client';
import App from './App';
import './style/tailwind.css';
import './style/global.css';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
