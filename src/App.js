import { Header } from './components/Header/'
import { Card } from './components/Card/'
import { Drawer } from './components/Drawer/'

const arr = [
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 15600,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    name: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    name: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/4.jpg',
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__head">
          <h1 className="content__title">Все кросовки</h1>
          <div className="content__search">
            <img
              className="content__search-img"
              src="img/search.svg"
              alt="Search"
            ></img>
            <input
              className="content__search-input"
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
        <div className="content__sneakers">
          {arr.map((obj, ind) => (
            <Card
              key={ind}
              name={obj.name}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClick={() => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
