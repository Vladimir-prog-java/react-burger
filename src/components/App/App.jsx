import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";

const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {

  const [data, setData] = useState(null);
  const [bunBurger, setBunBurger] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [isModalIngredient, setIsModalIngredient] = useState(false);
  const [isModalOrder, setIsModalOrder] = useState(false);
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

  const handleModalIngredient = () =>
    setIsModalIngredient(!isModalIngredient);

  const handleModalOrder = () =>
  setIsModalOrder(!isModalOrder);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
      })
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => setError(`${error}`));
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
              data={data}
              handleModalIngredient={handleModalIngredient}
            />
            <BurgerConstructor
              ingredients={ingredients}
              bunBurger={bunBurger}
              handleModalOrder={handleModalOrder}
            />
          </div>
        )}
      </main>
      {isModalOrder && (
        <Modal toggleModal={handleModalOrder} title="">
          <OrderDetails />
        </Modal>
      )}
      {isModalIngredient && (
        <Modal toggleModal={handleModalIngredient} title="Детали ингредиента">
          <IngredientDetails selectedIngredient={selectedIngredient} />
        </Modal>
      )}
    </>
  );
}

export default App;
