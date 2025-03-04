import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Drawer } from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://67a3aab031d0d3a6b7844d8f.mockapi.io/items')
      //fetch('/data.json')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />
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
          {items.map((obj, ind) => (
            <Card
              key={ind}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={() => console.log('Добавили в корзину')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
