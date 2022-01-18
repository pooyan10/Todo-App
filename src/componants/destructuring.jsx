import React from "react";
import "./styles.css";

const employee = {
  id: "1",
  name: "tom",
  age: 21,
  address: {
    street: "bargh",
    country: "shiraz",
    postcard: "34 - 774",
    zone: {
      id: 12,
      floor: 4,
    },
  },
};

export default function App() {
  const { name, id: firstid, age, address } = employee;
  const { street, country, postcard, zone } = address;
  const { id: secondid, floor } = zone;
  return (
    <div className="App">
      <h1> {`${id} : ${name} ${zone}`}</h1>
    </div>
  );
}
