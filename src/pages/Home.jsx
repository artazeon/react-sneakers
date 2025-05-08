import React from 'react'
import { Card } from '../components/Card/Card'

export const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearch,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (isLoading ? [...Array(12)] : filteredItems).map((item, ind) => (
      <Card
        key={ind}
        onFavorite={(obj) => {
          onAddToFavorite(obj)
        }}
        onPlus={(obj) => {
          onAddToCart(obj)
        }}
        loading={isLoading}
        {...item}
      />
    ))
  }
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
              src="img/btn-remove.svg"
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
      <div className="content__sneakers">{renderItems()}</div>
    </div>
  )
}
