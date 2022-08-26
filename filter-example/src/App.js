import React, { useState } from "react";
import "./App.css";
import Categories from "./data/categories";

function App() {
  const [data, setData] = useState(Categories);
  const filter = (value) => {
    const result = Categories.filter((currentValue) => {
      return currentValue.category === value;
    });
    setData(result);
  };
  return (
    <div className="App">
      <nav className="filter">
        <ul>
          <li onClick={() => setData(Categories)}>All</li>
          <li onClick={() => filter("Film")}>Film</li>
          <li onClick={() => filter("Food and drink")}>Food and drink</li>
          <li onClick={() => filter("E-commerce")}>E-commerce</li>
          <li onClick={() => filter("Fashion")}>Fashion</li>
          <li onClick={() => filter("Events")}>Events</li>
          <li onClick={() => filter("Hotel and restaurant")}>
            Hotel and restaurant
          </li>
          <li onClick={() => filter("Experemental")}>Experemental</li>
        </ul>
      </nav>
      <div className="content">
        {data.map((value) => (
          <div className="item" key={value.id}>
            <img src={value.image} alt="product" />
            <h4>{value.title}</h4>
            <div className="item-subtitle">
              <p>{value.text}</p>
              <span>{value.time}</span>
            </div>
            <div className="item-author">
              <img
                src={value.avatar}
                alt="avatar"
              />
              <p>
                by <span>{value.author}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
