import { useState, useEffect } from "react";
import Title from "./Title";
import Menu from "./Menu";
import data from "./data";
import Categories from "./Categories";

// const tempcategories = data.map((item) => item.category);
// const tempSet = new Set(tempcategories);
// const tempItems = ["all", ...tempSet];
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (filter) => {
    if (filter === "all") {
      setMenu(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === filter);
    setMenu(newMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our menu!" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
