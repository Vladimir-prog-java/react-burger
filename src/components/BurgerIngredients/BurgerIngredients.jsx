import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from "./Ingredient";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import styles from "./BurgerIngredients.module.css";
import { CLOSE_MODAL_INGREDIENT_DETAILS } from "../../services/actions/interface-actions";

const BurgerIngredients = () => {
  const { data } = useSelector(
    (store) => store.appReducer
  );

  const { ingredients, bunBurger } = useSelector(
    (store) => store.ingredientsReducer
  );

  const currentIngredientsName = useSelector(
    (store) => store.interfaceReducer.currentIngredientsName
  );

  const { isModalIngredientDetailsOpen } = useSelector(
    (store) => store.interfaceReducer
  );
  const dispatch = useDispatch();

  const handleModalClose = useCallback(() => {
    dispatch({ type: CLOSE_MODAL_INGREDIENT_DETAILS });
  }, [dispatch]);

  const [current, setCurrent] = useState("Булки");

  const handleScroll = (e) => {
    if (e.target.scrollTop < 140) {
      setCurrent("Булки");
    } else if (e.target.scrollTop < 560 && e.target.scrollTop > 140) {
      setCurrent("Соусы");
    } else {
      setCurrent("Начинки");
    }
  };


  const buns = data.map((el) => {
    if (el.type !== "bun") {
      return null;
    }
    return (
      <Ingredient
        data={el}
        key={el._id}
        counter={bunBurger && bunBurger._id === el._id ? 1 : null}
      />
    );
  });

  const sauces = data.map((el) => {
    if (el.type !== "sauce") {
      return null;
    }
    let counter = ingredients.filter(
      (element) => el._id === element._id
    ).length;
    counter = counter === 0 ? null : counter;
    return (
      <Ingredient
        data={el}
        key={el._id}
        counter={counter}
      />
    );
  });

  const fillings = data.map((el) => {
    if (el.type !== "main") {
      return null;
    }
    let counter = ingredients.filter(
      (element) => el._id === element._id
    ).length;
    counter = counter === 0 ? null : counter;
    return (
      <Ingredient
        data={el}
        key={el._id}
        counter={counter}
      />
    );
  });

  return (
    <>
      <section className={`${styles.burgerIngredients} mr-10`}>
        <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
        <div style={{ display: "flex" }}>
          <a href="#bun">
            <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
              Булки
            </Tab>
          </a>
          <a href="#sauce">
            <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
              Соусы
            </Tab>
          </a>
          <a href="#main">
             <Tab
              value="Начинки"
              active={current === "Начинки"}
              onClick={setCurrent}
            >
              Начинки
            </Tab>
          </a>
        </div>
        <div className={`mt-10 ${styles.scrollbar}`} onScroll={handleScroll}>
          <div>
            <h2 className="text text_type_main-medium" id="bun">
              Булки
            </h2>
            <div className={`mr-4 ml-4 ${styles.burgerIngredientsContainer}`}>
              {buns}
            </div>
          </div>
          <div>
            <h2 className="text text_type_main-medium" id="sauce">
              Соусы
            </h2>
            <div
              className={`mt-6 mb-10 mr-4 ml-4 ${styles.burgerIngredientsContainer}`}
            >
              {sauces}
            </div>
          </div>
          <div>
            <h2 className="text text_type_main-medium" id="main">
              Начинки
            </h2>
            <div
              className={`mt-6 mb-10 mr-4 ml-4 ${styles.burgerIngredientsContainer}`}
            >
              {fillings}
            </div>
          </div>
        </div>
      </section>

      {isModalIngredientDetailsOpen && (
        <Modal toggleModal={handleModalClose} title="Детали ингредиента">
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
};

export default BurgerIngredients;
