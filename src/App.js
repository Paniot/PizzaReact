import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import React from 'react';
import axios from "axios"

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://64121734f9fe8122ae1c6fcc.mockapi.io/items')
     .then(response => response.json())
     .then(json => setItems(json))
  }, [])
  
  React.useEffect(() => {
    const instance = axios.create({
      baseURL: 'https://64121734f9fe8122ae1c6fcc.mockapi.io',
      withCredentials: true,
  })
  instance.get('/items').then(response=>console.log(response))
}, []);



  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((pizza, index) => (
                <PizzaBlock {...pizza}
                key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
