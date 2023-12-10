import './style.css'; // Importe os estilos CSS relevantes aqui

const SearchPage = () => {
  return (
    <div>
      <header className="search-page-header">
        <div className="logo">
          <img src="./assets/imgs/logo.svg" alt="" className="desktop-logo" />
          <img src="./assets/imgs/logo-mobile-2.svg" alt="" className="logo-mobile" />
        </div>
        <div className="search-bar">
          <input type="search" name="Search" id="search-bar" />
        </div>
        <div className="search-mobile-way">
          <img src="./assets/imgs/Search.svg" alt="" />
        </div>
        <div className="profile">
          <span className="profile-logo"></span>
          <p className="welcome"></p>
          <span className="more-options-logo"></span>
        </div>
        <div className="profile-mobile-way">
          <img src="./assets/imgs/User.svg" alt="" />
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
            {/* Adicione mais categorias conforme necessário */}
          </ul>
          <ul className="plataforms">
            <h2 className="plataformTitle">Plataformas</h2>
            <li>
              <input type="checkbox" name="xbox" id="xbox" className="checkbox"/>
              <label htmlFor="xbox">Xbox</label>
            </li>
            {/* Adicione mais plataformas conforme necessário */}
          </ul>
        </aside>
        <main className="search-page-results">
          {/* Renderize os resultados de pesquisa aqui */}
          {/* Cada resultado deve ser um componente separado */}
        </main>
      </div>
    </div>
  );
};

export default SearchPage;
