export const Drawer = ({ onClose, items = [] }) => (
  <div style={{}} className="ovewlay">
    <div className="drawer">
      <h2 className="drawer__title">
        Корзина
        <img
          className="drawer__cart-item-remove"
          src="/img/btn-remove.svg"
          alt="Remove"
          onClick={onClose}
        />
      </h2>
      <div className="drawer__items">
        {items.map((obj) => (
          <div className="drawer__cart-item">
            <div
              className="drawer__cart-item-img"
              style={{ backgroundImage: `url(${obj.imageUrl})` }}
            ></div>
            <div className="drawer__cart-item-descr">
              <p className="drawer__cart-item-name">{obj.name}</p>
              <b className="drawer__cart-item-price">{obj.price}</b>
            </div>
            <img
              className="drawer__cart-item-remove"
              src="/img/btn-remove.svg"
              alt="Remove"
            />
          </div>
        ))}
      </div>
      <div className="drawer__total">
        <ul className="drawer__total-items">
          <li className="drawer__total-item">
            <span className="drawer__total-label">Итого:</span>
            <div className="drawer__total-line"></div>
            <b className="drawer__total-sum">21 498 руб.</b>
          </li>
          <li className="drawer__total-item">
            <span className="drawer__total-label">Налог 5%:</span>
            <div className="drawer__total-line"></div>
            <b className="drawer__total-sum">1 074 руб.</b>
          </li>
        </ul>
        <button className="green-button">
          Оформить заказ
          <img
            className="green-button__arrow"
            src="/img/arrow.svg"
            alt="Arrow"
          />
        </button>
      </div>
    </div>
  </div>
)
