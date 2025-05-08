import React from 'react'
import axios from 'axios'
import { Info } from '../Info/Info'
import { useCart } from '../../hooks/useCart'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const Drawer = ({ onClose, onRemoveItem, items = [], opened }) => {
  const { cartItems, setCartItems, totalPrice } = useCart()
  const [orderId, setOrderId] = React.useState(null)
  const [isOrderComplite, setIsOrderComplite] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        'https://67c9b9a6102d684575c34ce8.mockapi.io/orders',
        { items: cartItems }
      )
      setOrderId(data.id)
      setIsOrderComplite(true)
      setCartItems([])

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i]
        await axios.delete(
          'https://67a3aab031d0d3a6b7844d8f.mockapi.io/cart/' + item.id
        )
        await delay(1000)
      }
    } catch (error) {
      alert('Ошибка при создании заказа :(')
    }
    setIsLoading(false)
  }

  return (
    <div
      style={{}}
      className={`ovewlay ${opened ? `ovewlay--visible` : ''}`}
      onClick={onClose}
    >
      <div className="drawer" onClick={(e) => e.stopPropagation()}>
        <h2 className="drawer__title">
          Корзина
          <img
            className="drawer__cart-item-remove"
            src="img/btn-remove.svg"
            alt="Remove"
            onClick={onClose}
          />
        </h2>

        {items.length > 0 ? (
          <div className="drawer__items-wrapper">
            <div className="drawer__items">
              {items.map((obj, ind) => (
                <div className="drawer__cart-item" key={`${obj.name}-${ind}`}>
                  <div
                    className="drawer__cart-item-img"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>
                  <div className="drawer__cart-item-descr">
                    <p className="drawer__cart-item-name">{obj.name}</p>
                    <b className="drawer__cart-item-price">{obj.price}</b>
                  </div>
                  <img
                    className="drawer__cart-item-remove"
                    src="img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemoveItem(obj.id)}
                  />
                </div>
              ))}
            </div>
            <div className="drawer__total">
              <ul className="drawer__total-items">
                <li className="drawer__total-item">
                  <span className="drawer__total-label">Итого:</span>
                  <div className="drawer__total-line"></div>
                  <b className="drawer__total-sum">{totalPrice} €</b>
                </li>
                <li className="drawer__total-item">
                  <span className="drawer__total-label">Налог 5%:</span>
                  <div className="drawer__total-line"></div>
                  <b className="drawer__total-sum">
                    {Math.round(totalPrice * 0.05 * 100) / 100} €
                  </b>
                </li>
              </ul>
              <button
                className="green-button"
                disabled={isLoading}
                onClick={onClickOrder}
              >
                Оформить заказ
                <img
                  className="green-button__arrow"
                  src="img/arrow.svg"
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplite ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplite
                ? `Номер заказа №${orderId}. В ближайшее время с вами свяжется менеджер для подтвержделния заказа`
                : 'Для оформления заказа, добавте товар в корзину'
            }
            image={
              isOrderComplite ? 'img/comlite-order.png' : 'img/cart-empty.png'
            }
          />
        )}
      </div>
    </div>
  )
}
