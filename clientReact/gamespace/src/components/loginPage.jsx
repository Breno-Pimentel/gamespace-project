import '../App.css';
import { Link } from "react-router-dom";
import logoImg from '../assets/imgs/Component 1.svg';
import backToLogo from '../assets/imgs/back-to-logo.svg';
import logoMobile from '../assets/imgs/logo-mobile.svg';
import vectorImg from '../assets/imgs/Vector.svg';
import vector1Img from '../assets/imgs/Vector-1.svg';

export function LoginPage() {
  return (
    <div className="wrapper">
      <aside>
        <img src={logoImg} alt="Logo" className="logo" />
        <div className="welcome-login-area">
          <h1>Bem-vindo de volta</h1>
          <p className="subtitle">Acesse sua conta agora mesmo.</p>
        </div>
        <Link to="/register" className="btn">
          CRIAR CONTA
        </Link>
      </aside>
      <main className="login-area">
        <div className="login-area-header">
          <a href="index" className="back-to">
            <img src={backToLogo} alt="" />
          </a>
          <img src={logoMobile} alt="" className="logo-mobile" />
          <h1>Entre na sua conta</h1>
          <p>Preencha seus dados:</p>
        </div>
        <form action="#">
          <div className="email-area">
            <label>Inicie a sessão com seus dados:</label>
            <input type="email" id="email" placeholder="E-mail:" required />
            <div className="input-icon">
              <img src={vectorImg} alt="" />
            </div>
          </div>
          <div className="password-area">
            <label>Senha</label>
            <input type="password" id="password" placeholder="Senha:" required />
            <div className="input-icon">
              <img src={vector1Img} alt="" />
            </div>
          </div>

          <input type="submit" value="ENTRAR" id="login-btn" />
        </form>
        <div className="register-area-button">
          <div className="line"></div>
          <p>Não tem uma conta? Crie agora</p>
          <Link to="/register" id="register-btn-redirect">
            CADASTRE-SE
          </Link>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
