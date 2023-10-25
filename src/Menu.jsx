import React from "react";
import Dish from "./Dish";

const Menu = ({ menu }) => {
  return (
    <section className="section-center">
      {menu.map((dish) => (
        <Dish dish={dish} key={dish.id} />
      ))}
    </section>
  );
};

export default Menu;
