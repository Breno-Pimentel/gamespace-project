import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import LoginPage from "../components/loginPage";
import DashboardPage from "../components/dashboard";
import Register from "../components/register"

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
        <Route path="/register" exact>
          <Register />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default App;

