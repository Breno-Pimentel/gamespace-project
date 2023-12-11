import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/imgs/Component 1.svg';
import backToLogo from '../assets/imgs/back-to-logo.svg';
import logoMobile from '../assets/imgs/logo-mobile.svg';
import vectorImg from '../assets/imgs/Vector.svg';
import userInputImg from '../assets/imgs/user-input.svg';
import vector1Img from '../assets/imgs/Vector-1.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    repetirSenha: '',
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

    // Verifica se as senhas são iguais
    if (formData.password !== formData.repetirSenha) {
      console.error('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://www.prestecinfo.com.br:3001/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      // Lida com a resposta da requisição
      if (response.ok) {
        console.log('Registro realizado com sucesso:', json);
        window.location.replace(`http://62.72.63.83:5173/login`)
      } else {
        console.error('Erro no registro:', json);
      }
    } catch (err) {
      console.error('Erro na conexão:', err);
    }
  };

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
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail:"
              required
              value={formData.email}
              onChange={(e) => {
                handleFormEdit(e, 'email');
              }}
            />
            <div className="input-icon">
              <img src={vectorImg} alt="" />
            </div>
          </div>
          <div className="name-area">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome:"
              required
              value={formData.name}
              onChange={(e) => {
                handleFormEdit(e, 'name');
              }}
            />
            <div className="input-icon">
              <img src={userInputImg} alt="" />
            </div>
          </div>
          <div className="password-area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha:"
              required
              value={formData.password}
              onChange={(e) => {
                handleFormEdit(e, 'password');
              }}
            />
            <div className="input-icon">
              <img src={vector1Img} alt="" />
            </div>
          </div>
          <div className="password-area-check">
            <input
              type="password"
              id="password-check"
              name="repetirSenha"
              placeholder="Repetir Senha:"
              required
              value={formData.repetirSenha}
              onChange={(e) => {
                handleFormEdit(e, 'repetirSenha');
              }}
            />
            <div className="input-icon">
              <img src={vector1Img} alt="" />
            </div>
          </div>
          <input
            type="submit"
            value="CRIAR CONTA"
            id="register-btn"
            name="criarConta"
            onClick={handleFormSubmit}
          />
        </form>
      </main>
    </div>
  );
};

export default Register;
/*
import React, { useState } from 'react';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    senha: '',
    repetirSenha: '',
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

    // Verifica se as senhas são iguais
    if (formData.senha !== formData.repetirSenha) {
      console.error('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://www.prestecinfo.com.br:3001/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      // Lida com a resposta da requisição
      if (response.ok) {
        console.log('Registro realizado com sucesso:', json);
      } else {
        console.error('Erro no registro:', json);
      }
    } catch (err) {
      console.error('Erro na conexão:', err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={e => handleFormEdit(e, 'email')}
      />
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={e => handleFormEdit(e, 'nome')}
      />
      <input
        type="password"
        name="senha"
        placeholder="Senha"
        value={formData.senha}
        onChange={e => handleFormEdit(e, 'senha')}
      />
      <input
        type="password"
        name="repetirSenha"
        placeholder="Repetir Senha"
        value={formData.repetirSenha}
        onChange={e => handleFormEdit(e, 'repetirSenha')}
      />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default FormularioRegistro;
*/