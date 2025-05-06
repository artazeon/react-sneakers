import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppContext from './context'
import axios from 'axios'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Orders } from './pages/Orders'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  //Список товаров для mockapi.io в /public/data.json
  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get('https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart'),
            axios.get('https://67c9b9a6102d684575c34ce8.mockapi.io/favorites'),
            axios.get('https://67a3aab031d0d3a6b7844d8f.mockapi.io/items'),
          ])

        setIsLoading(false)
        setCartItems(cartResponse.data)
        setFavorites(favoritesResponse.data)
        setItems(itemsResponse.data)
      } catch (error) {
        console.error(error)
        alert(
          'Ошибка при запросе списка товаров, либо товаров в избранных, либо товаров корзины'
        )
      }
    }

    fetchData()
  }, [])

  const onAddToCart = async (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prevСartItems) =>
          prevСartItems.filter((item) => Number(item.id) !== Number(obj.id))
        )
        await axios.delete(
          `https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/${obj.id}`
        )
      } else {
        setCartItems((prevСartItems) => [...prevСartItems, obj])
        await axios.post(
          'https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart',
          obj
        )
      }
    } catch (error) {
      console.error(error)
      alert('Ошибка при добавлении товара в корзину')
    }
  }

  const onRemoveItem = async (id) => {
    try {
      await axios.delete(
        `https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/${id}`
      )
      setCartItems((prevСartItems) =>
        prevСartItems.filter((el) => el.id !== id)
      )
    } catch (error) {
      console.error(error)
      alert('Ошибка при удалении товара из корзины')
    }
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
      alert('Ошибка при удалении товара в избранное')
      console.error(error)
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
        onAddToCart,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          onClose={() => setCartOpened(false)}
          items={cartItems}
          onRemoveItem={onRemoveItem}
          opened={cartOpened}
        />

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

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
