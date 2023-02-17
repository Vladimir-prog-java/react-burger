import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";

import {getIngredients} from "../../utils/burger-api"

function App() {

  const [data, setData] = useState(null);
  const [bunBurger, setBunBurger] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [error, setError] = useState(null);
  
  const selectIngredient = (ingredient) => (e) => {
    e.preventDefault();
    if (ingredient.type === "bun") {
      setBunBurger(ingredient);
    } else {
      setIngredients([
        ...ingredients,
        { ...ingredient, key: _.uniqueId(ingredient._id) },
      ]);
    }
    setSelectedIngredient(ingredient);
  };

  useEffect(() => {
    getIngredients(setData, setError)
  }, []);

  return (
    <>
      <AppHeader />
      {error && (
        <h2 className={`${styles.main} text text_type_main-medium`}>
          {error}. Перезагрузите страницу
        </h2>
      )}
      <main className={styles.main}>
        {data && (
          <div className={styles.container}>
            <BurgerIngredients
              ingredients={ingredients}
              bunBurger={bunBurger}
              selectIngredient={selectIngredient}
              selectedIngredient={selectedIngredient}
              data={data}
            />
            <BurgerConstructor
              ingredients={ingredients}
              bunBurger={bunBurger}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
