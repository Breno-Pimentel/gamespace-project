import '../App.css'


export function loginPage() {
  return (
    <div className="wrapper">
      <aside>
        <img src="./assets/imgs/Component 1.svg" alt="Logo" className="logo" />
        <div className="welcome-login-area">
          <h1>Bem-vindo de volta</h1>
          <p className="subtitle">Acesse sua conta agora mesmo.</p>
        </div>
        <a href="./register.html" className="btn">
          CRIAR CONTA
        </a>
      </aside>
      <main className="login-area">
        <div className="login-area-header">
          <a href="index.html" className="back-to">
            <img src="../assets/imgs/back-to-logo.svg" alt="" />
          </a>
          <img src="../assets/imgs/logo-mobile.svg" alt="" className="logo-mobile" />
          <h1>Entre na sua conta</h1>
          <p>Preencha seus dados:</p>
        </div>
        <form action="#">
          <div className="email-area">
            <label>Inicie a sessão com seus dados:</label>
            <input type="email" id="email" placeholder="E-mail:" required />
            <div className="input-icon">
              <img src="../assets/imgs/Vector.svg" alt="" />
            </div>
          </div>
          <div className="password-area">
            <label>Senha</label>
            <input type="password" id="password" placeholder="Senha:" required />
            <div className="input-icon">
              <img src="../assets/imgs/Vector-1.svg" alt="" />
            </div>
          </div>

          <input type="submit" value="ENTRAR" id="login-btn" />
        </form>
        <div className="register-area-button">
          <div className="line"></div>
          <p>Não tem uma conta? Crie agora</p>
          <a href="register.html" id="register-btn-redirect">
            CADASTRE-SE
          </a>
        </div>
      </main>
    </div>
  );
}

export default loginPage;
