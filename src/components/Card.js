import React from 'react'

export const Card = ({ name, price, imageUrl, onPlus, onFavorite }) => {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () => {
    setIsAdded(!isAdded)
  }

  return (
    <div className="content__card">
      <div className="content__card-favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" onClick={onFavorite} />
      </div>
      <img
        width={133}
        height={120}
        src={imageUrl}
        alt="Sneakers"
        className="content__card-img"
      />
      <h5 className="content__card-name">{name}</h5>

      <div className="content__card-bottom">
        <div className="content__card-price">
          <span className="content__card-price-label">Цена:</span>
          <b className="content__card-price-value">{price} руб.</b>
        </div>

        <img
          src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
          className="content__card-button-img"
          onClick={onClickPlus}
        />
      </div>
    </div>
  )
}
