import Layout from './views/Layout';
import Router from './Router';

function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
  );
}

export default App;
