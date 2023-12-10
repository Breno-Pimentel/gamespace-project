import { BrowserRouter as Router, Route } from "react-router-dom";

import { index } from "./pages/index";
import { loginPage } from "./pages/loginPage";

const App = () => {
  return (
    <Router>
        <Route path="/" exact component={index} />
        <Route path="/login" component={loginPage} />
        {/* Adicione mais rotas conforme necessário */}
     </Router>
  );
};
//Teste 

export default App;
