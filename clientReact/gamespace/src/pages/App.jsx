import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/loginPage";
import DashboardPage from "./components/DashboardPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

