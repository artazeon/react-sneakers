import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import AppContext from './context'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  //Список товаров для mockapi.io в /public/data.json
  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        'https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart'
      )
      const favoritesResponse = await axios.get(
        'https://67c9b9a6102d684575c34ce8.mockapi.io/favorites'
      )
      const itemsResponse = await axios.get(
        'https://67a3aab031d0d3a6b7844d8f.mockapi.io/items'
      )

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }

    fetchData()
  }, [])

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/${obj.id}`)
      setCartItems((prevСartItems) =>
        prevСartItems.filter((item) => Number(item.id) !== Number(obj.id))
      )
    } else {
      axios.post('https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart', obj)
      setCartItems((prevСartItems) => [...prevСartItems, obj])
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/${id}`)
    setCartItems((prevСartItems) => prevСartItems.filter((el) => el.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://67c9b9a6102d684575c34ce8.mockapi.io/favorites/${obj.id}`
        )
        setFavorites((prevFavorites) =>
          prevFavorites.filter((item) => Number(item.id) !== Number(obj.id))
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
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
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearch={onChangeSearch}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
                onAddToFavorite={onAddToFavorite}
              />
            }
            exact
          />
          <Route path="/test" element={<h1>Это тестовая информация</h1>} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
