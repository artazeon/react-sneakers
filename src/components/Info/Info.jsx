import React from 'react'
import AppContext from '../../context'

export const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext)

  return (
    <div className="drawer__cart-empty">
      <img className="drawer__cart-empty-img" src={image} alt="Empty cart" />
      <h2 className="drawer__cart-empty-title">{title}</h2>
      <p className="drawer__cart-empty-text">{description}</p>
      <button className="green-button" onClick={() => setCartOpened(false)}>
        <img className="green-button__arrow" src="img/arrow.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  )
}
