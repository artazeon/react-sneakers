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
  orderDate,
}) => {
  const { isItemAdded, isItemFavorited } = React.useContext(AppContext)

  const obj = { id, parentId: id, name, price, imageUrl }

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavorite = () => {
    onFavorite(obj)
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
          {onFavorite && (
            <div className="content__card-favorite" onClick={onClickFavorite}>
              <img
                src={
                  isItemFavorited(id)
                    ? `${process.env.PUBLIC_URL}/img/heart-liked.svg`
                    : `${process.env.PUBLIC_URL}/img/heart-unliked.svg`
                }
                alt="Unliked"
              />
            </div>
          )}
          {orderDate && (
            <>
              <b className="content__card-order-date-info">Дата заказа:</b>
              <p className="content__card-order-date">{orderDate}</p>
            </>
          )}

          <img
            width="100%"
            height="auto"
            src={`${process.env.PUBLIC_URL}/${imageUrl}`}
            alt="Sneakers"
            className="content__card-img"
          />
          <h5 className="content__card-name">{name}</h5>

          <div className="content__card-bottom">
            <div className="content__card-price">
              <span className="content__card-price-label">Цена:</span>
              <b className="content__card-price-value">{price} €</b>
            </div>

            {onPlus && (
              <img
                src={
                  isItemAdded(id)
                    ? `${process.env.PUBLIC_URL}/img/btn-cheked.svg`
                    : `${process.env.PUBLIC_URL}/img/btn-plus.svg`
                }
                alt="Plus"
                className="content__card-button-img"
                onClick={onClickPlus}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}
