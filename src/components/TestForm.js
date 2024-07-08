import React from "react";
import { useState } from "react";

const TestForm = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    message: "",
    carBrand: "",
    isChecked: false,
    gender: "",
    price: 0,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setName((name) => ({
      ...name,
      [e.target.name]: value,
    }));
  };

  const carBrands = ["Toyota", "Audi", "Honda", "Mecedes", "Tesla"];

  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option key={key} value={carBrand}>
      {carBrand}
    </option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    alert(
      <>
        {name.firstName}, {name.lastName}, {name.carBrand}
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>First Name: </span>
          <input
            type="text"
            value={name.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>First Name: </span>
          <input
            type="text"
            value={name.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Message: </span>
          <textarea
            name="message"
            value={name.message}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Car bRand: </span>
          <select name="carBrand" value={name.carBrand} onChange={handleChange}>
            <option disabled value={""}>
              --- Select a car brand ---
            </option>
            {carBrandOptions}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="isChecked"
            checked={name.isChecked}
            onChange={handleChange}
          />
          <span>Receive update</span>
        </label>
        <label>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={name.gender === "Male"}
            onChange={handleChange}
          />
          <span>Male</span>
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={name.gender === "Female"}
            onChange={handleChange}
          />
          <span>Female</span>
        </label>
        <label>
          <span> Car price: </span>
          <input
            type="range"
            name="price"
            min="0"
            max="100"
            value={name.price}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      <h3>First Name: {name.firstName}</h3>
      <h3>Last name: {name.lastName}</h3>
      <h3>Gender: {name.gender}</h3>
      <h3>Your message: </h3>
      <p>{name.message}</p>
      <h3>Favorite car brand: {name.carBrand}</h3>
      <h3>Car price: ${name.price}</h3>
      <h3>Receive update: {name.isChecked ? "Yes" : "No"}</h3>
    </>
  );
};
export default TestForm;
