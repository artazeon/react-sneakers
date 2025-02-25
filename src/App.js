function App() {
  return (
    <div className="wrapper clear">
      <div className="ovewlay">
        <div className="drawer">
          <h2 className="drawer__title">
            Корзина
            <img
              className="drawer__cart-item-remove"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </h2>
          <div className="drawer__items">
            <div className="drawer__cart-item">
              <div
                className="drawer__cart-item-img"
                style={{ backgroundImage: "url('/img/sneakers/1.jpg')" }}
              ></div>
              <div className="drawer__cart-item-descr">
                <p className="drawer__cart-item-name">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <b className="drawer__cart-item-price">12 999 руб.</b>
              </div>
              <img
                className="drawer__cart-item-remove"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="drawer__cart-item">
              <div
                className="drawer__cart-item-img"
                style={{ backgroundImage: "url('/img/sneakers/1.jpg')" }}
              ></div>
              <div className="drawer__cart-item-descr">
                <p className="drawer__cart-item-name">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <b className="drawer__cart-item-price">12 999 руб.</b>
              </div>
              <img
                className="drawer__cart-item-remove"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="drawer__cart-item">
              <div
                className="drawer__cart-item-img"
                style={{ backgroundImage: "url('/img/sneakers/1.jpg')" }}
              ></div>
              <div className="drawer__cart-item-descr">
                <p className="drawer__cart-item-name">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <b className="drawer__cart-item-price">12 999 руб.</b>
              </div>
              <img
                className="drawer__cart-item-remove"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="drawer__total">
            <ul className="drawer__total-items">
              <li className="drawer__total-item">
                <span className="drawer__total-label">Итого:</span>
                <div className="drawer__total-line"></div>
                <b className="drawer__total-sum">21 498 руб.</b>
              </li>
              <li className="drawer__total-item">
                <span className="drawer__total-label">Налог 5%:</span>
                <div className="drawer__total-line"></div>
                <b className="drawer__total-sum">1 074 руб.</b>
              </li>
            </ul>
            <button className="green-button">
              Оформить заказ
              <img
                className="green-button__arrow"
                src="/img/arrow.svg"
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>

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
        <div className="content__head">
          <h1 className="content__title">Все кросовки</h1>
          <div className="content__search">
            <img
              className="content__search-img"
              src="img/search.svg"
              alt="Search"
            ></img>
            <input
              className="content__search-input"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>

        <div className="content__sneakers">
          <div className="content__card">
            <div className="content__favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
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
              src="/img/sneakers/2.jpg"
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
              src="/img/sneakers/3.jpg"
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
              src="/img/sneakers/4.jpg"
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
