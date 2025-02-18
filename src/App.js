function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/img/logo.png" alt="" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/favorites.svg" alt="" />
            <span>Закладки</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
            <span>Профиль</span>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кросовки</h1>
        ...
      </div>
    </div>
  )
}

export default App
