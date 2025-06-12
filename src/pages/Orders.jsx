import React from 'react'

// import AppContext from '../context'
import { Card } from '../components/Card/Card'
import { Info } from '../components/Info/Info'
import axios from 'axios'

export const Orders = () => {
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
        <h1 className="content__title">Мои покупки</h1>
      </div>
      <div className="content__sneakers">
        {isLoading ? (
          [...Array(12)].map((item, ind) => (
            <Card key={ind} loading={isLoading} {...item} />
          ))
        ) : orders.length > 0 ? (
          orders.map((item, ind) => (
            <Card key={ind} loading={isLoading} {...item} />
          ))
        ) : (
          <Info
            title={'У вас нет оформленных заказов'}
            description={`Чтобы офрмить заказ, добавте его в корзину, в корзине кликните "Оформить заказ"`}
            image={'img/smile-sad2.png'}
          />
        )}
      </div>
    </div>
  )
}
