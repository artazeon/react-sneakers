import { Card } from '../components/Card/Card'

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearch,
  onAddToFavorite,
  onAddToCart,
}) => {
  return (
    <div className="content">
      <div className="content__head">
        <h1 className="content__title">
          {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
        </h1>
        <div className="content__search">
          <img
            className="content__search-img"
            src="img/search.svg"
            alt="Search"
          ></img>

          {searchValue && (
            <img
              className="content__search-img-clear"
              src="/img/btn-remove.svg"
              alt="Clear"
              onClick={() => setSearchValue('')}
            />
          )}

          <input
            className="content__search-input"
            placeholder="Поиск..."
            type="text"
            onChange={onChangeSearch}
            value={searchValue}
          />
        </div>
      </div>
      <div className="content__sneakers">
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, ind) => (
            <Card
              key={`${item.name}-${ind}`}
              onFavorite={(obj) => {
                onAddToFavorite(obj)
              }}
              onPlus={(obj) => {
                onAddToCart(obj)
              }}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
      </div>
    </div>
  )
}
