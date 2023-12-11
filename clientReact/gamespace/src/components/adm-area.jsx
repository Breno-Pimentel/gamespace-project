import '../App.css';
import imgLogo from '../assets/imgs/logo.svg';
import imgMobileLogo from '../assets/imgs/logo-mobile-2.svg';
import imgEdit from '../assets/imgs/edit.png';
import imgDelete from '../assets/imgs/delete.png';

function AdminDashboard() {
  return (
    <div>
      <header className="adm-navigation-header">
        <img src={imgLogo} alt="Logo" id="logo" />
        <img src={imgMobileLogo} alt="" id="logo-mobile" />
        <h1>Adminstrador</h1>
      </header>
      <main className="adm-dashboard">
        <div className="plataformForm">
          <h1>Adicionar Plataforma</h1>
          <form action="#">
            <input
              type="text"
              name="plataformName"
              id="plataformName"
              placeholder="Nome da Plataforma:"
            />
            <button id="CreatePlataform">Adicionar</button>
          </form>
        </div>
        <div className="plataformsRankingStatistic">
          <p>Plataformas com mais jogos adicionados</p>
          <ul>
            {[...Array(8)].map((_, index) => (
              <li key={index}>
                <div className="plataformName-item">Teste</div>
                <div className="optionsCrud">
                  <button id="edit">
                    <img src={imgEdit} alt="" id="options-btn" />
                  </button>
                  <button id="delete">
                    <img src={imgDelete} alt="" id="options-btn" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
