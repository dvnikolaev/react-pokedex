import React from "react";

import "../../assets/stylesheets/Categories.css";
import CategoriesList from "./CategoriesList";

const Categories = () => {
  return (
    <div className="categories">
      <span className="categories__text">
        Категории:
      </span>
      <CategoriesList />
    </div>
  );
};

export default Categories;
