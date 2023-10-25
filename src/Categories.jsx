import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
        {categories.map((category) => (
          <Category key={categories.indexOf(category)} category={category} filterItems={filterItems} />
        ))}
    </div>
  );
};

export default Categories;
