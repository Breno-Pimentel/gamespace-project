import { Link } from "react-router-dom";
import logo from "../assets/imgs/logo.svg";
import logoMobile from "../assets/imgs/logo-mobile-2.svg";
import xboxImage from "../assets/imgs/Xbox.svg";
import steamImage from "../assets/imgs/Steam Circled.svg";
import playstationImage from "../assets/imgs/PlayStation.svg";
import windowsImage from "../assets/imgs/Windows 10.svg";
import arrowImage from "../assets/imgs/Thick Arrow Pointing Down.svg";
import dashboardImage from "../assets/imgs/initial-dashboard.svg";
import searchImage from "../assets/imgs/search-page.svg";
import dashboardAreaImage from "../assets/imgs/dashboard area 2.svg";
import rectangle112Image from "../assets/imgs/Rectangle 112.png";
import rectangle113Image from "../assets/imgs/Rectangle 113.png";
import rectangle139Image from "../assets/imgs/Rectangle 139.png";
import rectangle140Image from "../assets/imgs/Rectangle 140.png";
import image13Image from "../assets/imgs/image 13.png";
import "../App.css";


export function Home() {
  return (
    <>
      <header id="navigation-header">
        <img src={logo} alt="Logo" id="logo" />
        <img src={logoMobile} alt="" id="logo-mobile" />
        <Link to="/login" id="login-btn">
          Entrar
        </Link>
      </header>
      <main id="main-content">
        <section className="first-section">
          <h1>OS SEUS JOGOS EM UM ÚNICO ESPAÇO X</h1>
          <ul className="plataformsLogos">
            <li>
              <img src={xboxImage} alt="" />
            </li>
            <li>
              <img src={steamImage} alt="" />
            </li>
            <li>
              <img src={playstationImage} alt="" />
            </li>
            <li>
              <img src={windowsImage} alt="" />
            </li>
          </ul>
        </section>
        <div className="lookDown">
          <img src={arrowImage} alt="" />
        </div>
        <section className="second-section">
          <div className="apresentation-image">
            <img src={dashboardImage} alt="" />
          </div>
          <div className="apresentation-text">
            <h2>Desenvolvido para otimizar</h2>
            <p style={{ color: "black" }}>
              A plataforma foi desenvolvida para proporcionar facilidade em
              todas as etapas: descobrir, baixar e jogar. Assim, você entra no
              seu jogo com menos cliques.
            </p>
          </div>
        </section>
        <section className="third-section">
          <div className="apresentation-image">
            <img src={searchImage} alt="" />
          </div>
          <div className="apresentation-text">
            <h2 style={{ color: "#fff" }}>Mergulhe em nosso catálogo</h2>
            <p style={{ color: "#fff" }}>
              Com uma ampla variedade de títulos emocionantes, convidamos você a
              mergulhar em nosso catálogo e descobrir experiências de jogo
              inigualáveis que se encaixam perfeitamente em seu estilo.
            </p>
          </div>
        </section>
        <section className="fourth-section">
          <div className="apresentation-image">
            <img src={dashboardAreaImage} alt="" />
          </div>
          <div className="apresentation-text">
            <h2 style={{ color: "black" }}>Desenvolvido para se conectar</h2>
            <p style={{ color: "black" }}>
              Encontre jogadores com interesses semelhantes em nosso site, criado
              para se conectar a comunidade gamer.
            </p>
          </div>
        </section>
        <section className="fifth-section">
          {/* Deixe em branco ou remova se não houver conteúdo */}
        </section>
        <section className="last-section">
          <h1 style={{ color: "#fff" }}>
            Explore novos e antigos jogos em nosso catálogo
          </h1>
          <p style={{ color: "#fff" }}>
            Explore um amplo catálogo em constante crescimento, que abrange
            desde os clássicos indie até os grandes sucessos
          </p>
          <ul className="last-section-games-bar">
            <li>
              <img src={rectangle112Image} alt="" />
            </li>
            <li>
              <img src={rectangle113Image} alt="" />
            </li>
            <li>
              <img src={rectangle139Image} alt="" />
            </li>
            <li>
              <img src={rectangle140Image} alt="" />
            </li>
            <li>
              <img src={image13Image} alt="" />
            </li>
          </ul>
        </section>
      </main>
      <footer style={{ backgroundColor: "black", color: "white" }}>
        <p>© Gamespace. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
