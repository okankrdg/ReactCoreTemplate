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
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}

export default App;
