import React from 'react'
import AppContext from '../context'
import { Card } from '../components/Card/Card'
import { Info } from '../components/Info/Info'

export const Favorites = () => {
  const { favorites, onAddToFavorite, onAddToCart, isLoading } =
    React.useContext(AppContext)

  return (
    <div className="content">
      <div className="content__head">
        <h1 className="content__title">Избранное</h1>
      </div>
      <div className="content__sneakers">
        {isLoading ? (
          [...Array(12)].map((item, ind) => (
            <Card key={ind} loading={isLoading} {...item} />
          ))
        ) : favorites.length ? (
          favorites.map((item, ind) => (
            <Card
              key={`${item.name}-${ind}`}
              id={item.parentId}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={true}
              onFavorite={onAddToFavorite}
              onPlus={(obj) => {
                onAddToCart(obj)
              }}
            />
          ))
        ) : (
          <Info
            title={'Закладок нет'}
            description={`Чтобы добавить товар в закладки, необходимо кликнуть на иконку сердечка у товара`}
            image={'img/smile-sad.png'}
          />
        )}
      </div>
    </div>
  )
}
