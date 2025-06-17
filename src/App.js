import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useRef } from 'react'
import AppContext from './context'
import axios from 'axios'
import { Header } from './components/Header/Header'
import { Drawer } from './components/Drawer/Drawer'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Orders } from './pages/Orders'
import { Slider } from './components/Slider/Slider'

function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const targetRef = useRef(null)

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
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      )
      if (findItem) {
        setCartItems((prevСartItems) =>
          prevСartItems.filter(
            (item) => Number(item.parentId) !== Number(obj.id)
          )
        )
        await axios.delete(
          `https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/${findItem.id}`
        )
      } else {
        setCartItems((prevСartItems) => [...prevСartItems, obj])

        const { data } = await axios.post(
          'https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart',
          obj
        )

        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              }
            }
            return item
          })
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
        prevСartItems.filter((el) => Number(el.id) !== Number(id))
      )
    } catch (error) {
      console.error(error)
      alert('Ошибка при удалении товара из корзины')
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      const favoriteItem = favorites.find(
        (favObj) => Number(favObj.parentId) === Number(obj.id)
      )

      if (favoriteItem) {
        await axios.delete(
          `https://67c9b9a6102d684575c34ce8.mockapi.io/favorites/${favoriteItem.id}`
        )
        setFavorites((prevFavorites) =>
          prevFavorites.filter(
            (item) => Number(item.id) !== Number(favoriteItem.id)
          )
        )
      } else {
        const { data } = await axios.post(
          'https://67c9b9a6102d684575c34ce8.mockapi.io/favorites',
          obj
        )
        setFavorites((prevFavorites) => [...prevFavorites, data])
      }
    } catch (error) {
      alert('Ошибка при изменении избранного')
      console.error(error)
    }
  }

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id))
  }

  const isItemFavorited = (id) => {
    return favorites.some((obj) => Number(obj.parentId) === Number(id))
  }

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        isItemFavorited,
        onAddToFavorite,
        onAddToCart,
        cartOpened,
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
              <>
                <Slider scrollTargetRef={targetRef} />
                <section ref={targetRef}>
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
                </section>
              </>
            }
            exact
          />

          <Route path="favorites" element={<Favorites />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
