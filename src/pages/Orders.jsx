import React from 'react'

import AppContext from '../context'
import { Card } from '../components/Card/Card'
import axios from 'axios'

export const Orders = () => {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext)
  const [orders, setOrders] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get(
          'https://67c9b9a6102d684575c34ce8.mockapi.io/orders'
        )
        setOrders(data.reduce((accum, obj) => [...accum, ...obj.items], []))
        setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе списка выполненых заказов')
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className="content">
      <div className="content__head">
        <h1 className="content__title">Мои заказы</h1>
      </div>
      <div className="content__sneakers">
        {(isLoading ? [...Array(12)] : orders).map((item, ind) => (
          <Card
            key={ind}
            /*onFavorite={(obj) => {
              onAddToFavorite(obj)
            }}
            onPlus={(obj) => {
              onAddToCart(obj)
            }}*/
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
