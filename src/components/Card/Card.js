import React from 'react'
import ContentLoader from 'react-content-loader'
import AppContext from '../../context'

export const Card = ({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  loading,
}) => {
  const { isItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = React.useState(favorited)

  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl })
  }

  const onClickFavorite = () => {
    onFavorite({ id, name, price, imageUrl })
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="content__card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={160}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="44" rx="10" ry="10" width="150" height="89" />
          <rect x="1" y="159" rx="5" ry="5" width="150" height="20" />
          <rect x="0" y="188" rx="5" ry="5" width="100" height="20" />
          <rect x="0" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="118" y="230" rx="10" ry="10" width="32" height="32" />
          <rect x="0" y="0" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="content__card-favorite" onClick={onClickFavorite}>
            <img
              src={
                isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'
              }
              alt="Unliked"
            />
          </div>
          <img
            width="100%"
            height="auto"
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
              src={
                isItemAdded(id) ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'
              }
              alt="Plus"
              className="content__card-button-img"
              onClick={onClickPlus}
            />
          </div>
        </>
      )}
    </div>
  )
}
