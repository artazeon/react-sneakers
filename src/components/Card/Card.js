import React from 'react'

export const Card = ({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl })
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="content__card">
      <div className="content__card-favorite">
        <img
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="Unliked"
          onClick={onClickFavorite}
        />
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
