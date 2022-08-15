import { Switch, Route } from "react-router-dom";
import Carrinho from "../pages/Carrinho";
import Dashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import Produto from "../pages/Produto";
import Register from "../pages/Register";
import Vitrine from "../pages/Vitrine";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/carrinho">
        <Carrinho />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/vitrine/:id">
        <Produto />
      </Route>
      <Route path="/vitrine">
        <Vitrine />
      </Route>
    </Switch>
  );
};

export default Routes;
