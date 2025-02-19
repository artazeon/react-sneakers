function App() {
  return (
    <div className="wrapper clear">
      <header className="header">
        <div className="header__left">
          <img className="header__logo" src="/img/logo.png" alt="" />
          <div className="header__text">
            <h3 className="header__store-name">React Sneakers</h3>
            <p className="header__tagline">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right">
          <li className="header__right-menu">
            <img
              className="header__right-menu-img"
              width={18}
              height={18}
              src="/img/cart.svg"
              alt=""
            />
            <span className="header__right-menu-text">1205 руб.</span>
          </li>
          <li className="header__right-menu">
            <img
              className="header__right-menu-img"
              width={18}
              height={18}
              src="/img/favorites.svg"
              alt=""
            />
            <span className="header__right-menu-text">Закладки</span>
          </li>
          <li className="header__right-menu">
            <img
              className="header__right-menu-img"
              width={18}
              height={18}
              src="/img/user.svg"
              alt=""
            />
            <span className="header__right-menu-text">Профиль</span>
          </li>
        </ul>
      </header>

      <div className="content">
        <h1 className="content__title">Все кросовки</h1>

        <div className="content__sneakers">
          <div className="content__card">
            <img
              width={133}
              height={120}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
              className="content__card-img"
            />
            <h5 className="content__card-name">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>

            <div className="content__card-bottom">
              <div className="content__card-price">
                <span className="content__card-price-label">Цена:</span>
                <b className="content__card-price-value">12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                  className="content__button-img"
                />
              </button>
            </div>
          </div>
          <div className="content__card">
            <img
              width={133}
              height={120}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
              className="content__card-img"
            />
            <h5 className="content__card-name">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>

            <div className="content__card-bottom">
              <div className="content__card-price">
                <span className="content__card-price-label">Цена:</span>
                <b className="content__card-price-value">12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                  className="content__button-img"
                />
              </button>
            </div>
          </div>
          <div className="content__card">
            <img
              width={133}
              height={120}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
              className="content__card-img"
            />
            <h5 className="content__card-name">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>

            <div className="content__card-bottom">
              <div className="content__card-price">
                <span className="content__card-price-label">Цена:</span>
                <b className="content__card-price-value">12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                  className="content__button-img"
                />
              </button>
            </div>
          </div>
          <div className="content__card">
            <img
              width={133}
              height={120}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
              className="content__card-img"
            />
            <h5 className="content__card-name">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>

            <div className="content__card-bottom">
              <div className="content__card-price">
                <span className="content__card-price-label">Цена:</span>
                <b className="content__card-price-value">12 999 руб.</b>
              </div>
              <button className="content__card-button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="Plus"
                  className="content__button-img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
