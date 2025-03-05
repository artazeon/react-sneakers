import React from 'react'
import axios from 'axios'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Drawer } from './components/Drawer'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  //Список товаров для mockapi.io лежит в /public/data.json
  React.useEffect(() => {
    axios
      .get('https://67a3aab031d0d3a6b7844d8f.mockapi.io/items')
      .then((res) => {
        setItems(res.data)
      })

    axios
      .get('https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data)
      })
  }, [])

  const onAddToCart = (obj) => {
    axios
      .post('https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart', obj)
      .then((res) =>
        setCartItems((prevСartItems) => [...prevСartItems, res.data])
      )
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/${id}`)
    setCartItems((prevСartItems) => prevСartItems.filter((el) => el.id !== id))
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemoveItem={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__head">
          <h1 className="content__title">
            {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
          </h1>
          <div className="content__search">
            <img
              className="content__search-img"
              src="img/search.svg"
              alt="Search"
            ></img>

            {searchValue && (
              <img
                className="content__search-img-clear"
                src="/img/btn-remove.svg"
                alt="Clear"
                onClick={() => setSearchValue('')}
              />
            )}

            <input
              className="content__search-input"
              placeholder="Поиск..."
              type="text"
              onChange={onChangeSearch}
              value={searchValue}
            />
          </div>
        </div>
        <div className="content__sneakers">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, ind) => (
              <Card
                key={`${item.name}-${ind}`}
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
