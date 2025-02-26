export const Header = () => (
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
)
