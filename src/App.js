import './assets/scss/main.scss';
import Layout from "./layout";
import Home from "./pages/index";
export default function App() {
  return (
      <div className="App">
        <Layout>
          <Home />
        </Layout>
      </div>
  );
}
