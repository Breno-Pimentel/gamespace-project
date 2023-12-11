import '../App.css';
import { Link } from "react-router-dom";
import logoImg from '../assets/imgs/Component 1.svg';
import backToLogo from '../assets/imgs/back-to-logo.svg';
import logoMobile from '../assets/imgs/logo-mobile.svg';
import vectorImg from '../assets/imgs/Vector.svg';
import userInputImg from '../assets/imgs/user-input.svg';
import vector1Img from '../assets/imgs/Vector-1.svg';

const Register = () => {
  return (
    <div className="wrapper">
      <aside>
        <img src={logoImg} alt="Logo" className="logo" />
        <div className="welcome-register-area">
          <h1>Bem-vindo ao GameSpace</h1>
          <p className="subtitle">Crie sua conta agora mesmo.</p>
        </div>
        <Link to="/login" className="btn">
          ENTRAR
        </Link>
      </aside>
      <main className="register-area">
        <div className="register-area-header">
          <Link to="/" className="back-to">
            <img src={backToLogo} alt="" />
          </Link>
          <img src={logoMobile} alt="" className="logo-mobile" />
          <h1>Crie sua conta</h1>
          <p>Preencha seus dados</p>
        </div>
        <form action="#" id="register-form">
          <div className="email-area">
            <input type="email" id="email" placeholder="E-mail:" />
            <div className="input-icon">
              <img src={vectorImg} alt="" />
            </div>
          </div>
          <div className="name-area">
            <input type="text" id="name" placeholder="Digite seu nome:" />
            <div className="input-icon">
              <img src={userInputImg} alt="" />
            </div>
          </div>
          <div className="password-area">
            <input type="password" id="password" placeholder="Senha:" />
            <div className="input-icon">
              <img src={vector1Img} alt="" />
            </div>
          </div>
          <div className="password-area-check">
            <input type="password" id="password-check" placeholder="Senha:" />
            <div className="input-icon">
              <img src={vector1Img} alt="" />
            </div>
          </div>
          <input type="submit" value="CRIAR CONTA" id="register-btn" />
        </form>
      </main>
    </div>
  );
};

export default Register;
