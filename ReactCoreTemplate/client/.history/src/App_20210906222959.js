import "./App.css";
import Layout from "./components/Layout";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Layout>
      <div className="App">
        <p>Hello</p>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
