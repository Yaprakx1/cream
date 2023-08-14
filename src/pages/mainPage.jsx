import React from "react";
import Form from "../components/Form/form";
import Scoops from "../components/scoops/scoops";
import Toppings from "../components/toppings/toppings";

const MainPage = () => {
  return (
    <>
      {/* Kategoriler */}
      <Scoops />
      {/* Soslar */}
      <Toppings />
      {/* Form */}
      <Form />
    </>
  );
};

export default MainPage;
