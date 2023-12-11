import imgLogo from '../assets/imgs/logo.svg';
import imgLogoMobile from '../assets/imgs/logo-mobile-2.svg';

function searchPage() {
  return (
    <div>
      <header className="search-page-header">
        <div className="logo">
          <img src={imgLogo} alt="" className="desktop-logo" />
          <img src={imgLogoMobile} alt="" className="logo-mobile" />
        </div>
      </header>
      <div className="wrapper">
        <aside className="search-options">
          <ul className="categories">
            <h2 className="categoriesTitle">Categorias:</h2>
            <li>
              <input type="checkbox" name="action" id="action" className="checkbox" />
              <label htmlFor="action">Ação</label>
            </li>
            <li>
              <input type="checkbox" name="adventure" id="adventure" className="checkbox" />
              <label htmlFor="adventure">Aventura</label>
            </li>
            <li>
              <input type="checkbox" name="race" id="race" className="checkbox" />
              <label htmlFor="race">Corrida</label>
            </li>
            <li>
              <input type="checkbox" name="simulation" id="simulation" className="checkbox" />
              <label htmlFor="simulation">Simulação</label>
            </li>
            <li>
              <input type="checkbox" name="sports" id="sports" className="checkbox" />
              <label htmlFor="sports">Esportes</label>
            </li>
            <li>
              <input type="checkbox" name="strategy" id="strategy" className="checkbox" />
              <label htmlFor="strategy">Estratégia</label>
            </li>
          </ul>
          <ul className="plataforms">
            <h2 className="plataformTitle">Plataformas</h2>
            <li>
              <input type="checkbox" name="xbox" id="xbox" className="checkbox" />
              <label htmlFor="xbox">Xbox</label>
            </li>
            <li>
              <input type="checkbox" name="playstation" id="playstation" className="checkbox" />
              <label htmlFor="playstation">Playstation</label>
            </li>
            <li>
              <input type="checkbox" name="windows" id="windows" className="checkbox" />
              <label htmlFor="windows">Windows</label>
            </li>
            <li>
              <input type="checkbox" name="macos" id="macos" className="checkbox" />
              <label htmlFor="macos">MacOS</label>
            </li>
            <li>
              <input type="checkbox" name="linux" id="linux" className="checkbox" />
              <label htmlFor="linux">Linux</label>
            </li>
          </ul>
        </aside>
        <main className="search-page-results">
          {/* Você pode mapear os resultados aqui */}
          {Array.from({ length: 12 }, (_, index) => (
            <div className="game-cover" key={index}>
              <img src="" alt="Capa do jogo" />
              <p>Nome do jogo</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default searchPage;
