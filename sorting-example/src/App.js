import React, { useState } from "react";
import MockData from "./data/MockData.json";
import "./App.css";

function App() {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="container">
      <div className="head">
        <p onClick={() => sorting("name")}>First name</p>
        <p onClick={() => sorting("country")}>Country</p>
        <p onClick={() => sorting("email")}>Email</p>
        <p onClick={() => sorting("gender")}>Gender</p>
      </div>
      <div className="body">
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.country}</p>
            <p>{item.email}</p>
            <p>{item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
