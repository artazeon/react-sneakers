export const Card = ({ name, price, imageUrl, onClick }) => {
  return (
    <div className="content__card">
      <div className="content__card-favorite">
        <img src="/img/heart-unliked.svg" alt="Unliked" />
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
        <button className="content__card-button" onClick={onClick}>
          <img
            width={11}
            height={11}
            src="/img/plus.svg"
            alt="Plus"
            className="content__card-button-img"
          />
        </button>
      </div>
    </div>
  )
}
