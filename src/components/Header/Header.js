import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export const Header = ({ onClickCart }) => {
  const { totalPrice } = useCart()

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" className="header__left-link">
          <img className="header__logo" src="img/logo.png" alt="" />

          <div className="header__text">
            <h3 className="header__store-name">React Sneakers</h3>
            <p className="header__tagline">Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <ul className="header__right">
        <li className="header__right-menu" onClick={onClickCart}>
          <img
            className="header__right-menu-img"
            width={18}
            height={18}
            src="img/cart.svg"
            alt=""
          />
          <span className="header__right-menu-text">{totalPrice} €</span>
        </li>
        <li className="header__right-menu">
          <Link to="favorites">
            <img
              className="header__right-menu-img"
              width={18}
              height={18}
              src="img/favorites.svg"
              alt=""
            />
            {/* <span className="header__right-menu-text">Закладки</span> */}
          </Link>
        </li>
        <li className="header__right-menu">
          <Link to="orders">
            <img
              className="header__right-menu-img"
              width={18}
              height={18}
              src="img/user.svg"
              alt=""
            />
            {/* <span className="header__right-menu-text">Профиль</span> */}
          </Link>
        </li>
      </ul>
    </header>
  )
}
