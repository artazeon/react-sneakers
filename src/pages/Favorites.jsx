import { Card } from '../components/Card/Card'
export const Favorites = ({ items, onAddToFavorite }) => {
  return (
    <div className="content">
      <div className="content__head">
        <h1 className="content__title">Избранное</h1>
      </div>
      <div className="content__sneakers">
        {items.map((item, ind) => (
          <Card
            key={`${item.name}-${ind}`}
            id={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            favorited={true}
            onFavorite={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  )
}
