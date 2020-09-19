import React, { useState, useEffect } from "react";

import { pokeapi } from "../../api/pokeapi";
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await pokeapi.get("/type");
      setCategories(data.results);
    };
    fetchCategories();
  }, []);

  const renderListItem = () => {
    if (!categories.length) {
      return null;
    }
    return categories.map((category) => {
      return (
        <CategoriesListItem
          active={active}
          setActive={setActive}
          category={category.name}
          url={category.url}
          key={category.name}
        />
      );
    });
  };

  return (
    <ul className="categories-list">
      <CategoriesListItem
        category="All"
        url=""
        active={active}
        setActive={setActive}
      />
      {renderListItem()}
    </ul>
  );
};

export default CategoriesList;
