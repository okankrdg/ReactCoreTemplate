import "./App.css";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
function App() {
  return (
    <Layout>
      <div className="App">
        <p>Hello</p>
        <Route exact path="/" />
      </div>
    </Layout>
  );
}

export default App;
