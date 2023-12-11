  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import logoImg from '../assets/imgs/Component 1.svg';
  import backToLogo from '../assets/imgs/back-to-logo.svg';
  import logoMobile from '../assets/imgs/logo-mobile.svg';
  import vectorImg from '../assets/imgs/Vector.svg';
  import vector1Img from '../assets/imgs/Vector-1.svg';

  const LoginPage = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });

    const handleFormEdit = (event, name) => {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      // Verifica se algum campo está vazio
      if (Object.values(formData).some(value => value === '')) {
        console.error('Por favor, preencha todos os campos.');
        return;
      }

      try {
        const response = await fetch('http://www.prestecinfo.com.br:3001/auth/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const json = await response.json();

        // Lida com a resposta da requisição
        if (response.ok) {
          console.log('Login realizado com sucesso:', json);
          // Adicione aqui o redirecionamento após o login
          window.location.replace(`http://62.72.63.83:5173/dashboard`)
        } else {
          alert("ERRO ao logar")
          console.log("Login realizado com suces")
          console.error('Erro no login:', json);
        }
      } catch (err) {
        console.error('Erro na conexão:', err);
      }
    };

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
          <form onSubmit={handleFormSubmit}>
            <div className="email-area">
              <label>Inicie a sessão com seus dados:</label>
              <input
                type="email"
                id="email"
                placeholder="E-mail:"
                required
                value={formData.email}
                onChange={(e) => handleFormEdit(e, 'email')}
              />
              <div className="input-icon">
                <img src={vectorImg} alt="" />
              </div>
            </div>
            <div className="password-area">
              <label>Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Senha:"
                required
                value={formData.password}
                onChange={(e) => handleFormEdit(e, 'password')}
              />
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
  };

  export default LoginPage;
