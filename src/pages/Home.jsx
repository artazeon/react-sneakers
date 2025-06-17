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
  targetRef,
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
    <div className="content" ref={targetRef}>
      <div className="content__head">
        <h1 className="content__title">
          {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
        </h1>
        <div className="content__search">
          <img
            className="content__search-img"
            src={`${process.env.PUBLIC_URL}/img/search.svg`}
            alt="Search"
          ></img>

          {searchValue && (
            <img
              className="content__search-img-clear"
              src={`${process.env.PUBLIC_URL}/img/btn-remove.svg`}
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
