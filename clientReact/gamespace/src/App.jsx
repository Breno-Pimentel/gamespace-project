import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { index } from "./components/index";
import { loginPage } from "./components/loginPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={index} />
        <Route path="/login" component={loginPage} />
        {/* Adicione mais rotas conforme necessário */}
      </Switch>
    </Router>
  );
};
//Teste 

export default App;
