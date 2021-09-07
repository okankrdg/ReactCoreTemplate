import "./App.css";
import Layout from "./components/Layout";
import { Route, Switch } from "react-router-dom";
import { About, Dashboard, Home, Contact } from "./Pages/NavLinkComps";
function App() {
  return (
    <Layout>
      <div className="App">
        <p>Hello</p>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
