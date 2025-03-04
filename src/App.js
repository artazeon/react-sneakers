import React from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Drawer } from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://67a3aab031d0d3a6b7844d8f.mockapi.io/items')
      //fetch('/data.json') // при недоступном mockapi.io
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setItems(json)
      })
  }, [])

  const onAddToCart = (obj) => {
    const isItemAddedToCart = cartItems.some((el) => el.name === obj.name)

    if (!isItemAddedToCart) {
      setCartItems((prevСartItems) => [...prevСartItems, obj])
    }
    if (isItemAddedToCart) {
      setCartItems((prevСartItems) => {
        const deletedItem = prevСartItems.filter((el) => el.name !== obj.name)
        return deletedItem
      })
    }
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer onClose={() => setCartOpened(false)} items={cartItems} />
      )}

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
          {items.map((item, ind) => (
            <Card
              key={ind}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Добавили в закладки')}
              onPlus={(obj) => {
                onAddToCart(obj)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
