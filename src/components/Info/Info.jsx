import React from 'react'
import AppContext from '../../context'
import { useNavigate } from 'react-router-dom'

export const Info = ({ title, image, description }) => {
  const { cartOpened, setCartOpened } = React.useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className="drawer__cart-empty">
      <img className="drawer__cart-empty-img" src={image} alt="Empty cart" />
      <h2 className="drawer__cart-empty-title">{title}</h2>
      <p className="drawer__cart-empty-text">{description}</p>
      <button
        className="green-button"
        onClick={cartOpened ? () => setCartOpened(false) : () => navigate('/')}
      >
        <img className="green-button__arrow" src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  )
}
