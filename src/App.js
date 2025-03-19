import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  //Список товаров для mockapi.io в /public/data.json
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
    axios
      .get('https://67c9b9a6102d684575c34ce8.mockapi.io/favorites')
      .then((res) => {
        setFavorites(res.data)
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

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((el) => el.id === obj.id)) {
        axios.delete(
          `https://67c9b9a6102d684575c34ce8.mockapi.io/favorites/${obj.id}`
        )
      } else {
        const { data } = await axios.post(
          'https://67c9b9a6102d684575c34ce8.mockapi.io/favorites',
          obj
        )
        setFavorites((prevFavorites) => [...prevFavorites, data])
      }
    } catch (error) {
      alert('Не удалось добавить в закладки')
    }
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

      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearch={onChangeSearch}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
          exact
        />
      </Routes>

      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  )
}

export default App
