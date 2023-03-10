import React, { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Ingredient from "./Ingredient";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import styles from "./BurgerIngredients.module.css";

const BurgerIngredients = (props) => {
    const {
      ingredients,
      bunBurger,
      selectIngredient,
      selectedIngredient,
      data
    } = props;
    const [current, setCurrent] = useState("Булки");
    const [isModalIngredient, setIsModalIngredient] = useState(false);
  
    const handleScroll = (e) => {
      if (e.target.scrollTop < 140) {
        setCurrent("Булки");
      } else if (e.target.scrollTop < 560 && e.target.scrollTop > 140) {
        setCurrent("Соусы");
      } else {
        setCurrent("Начинки");
      }
    };

    const handleModalIngredient = () =>
    setIsModalIngredient(!isModalIngredient);

    const buns = data.map((el) => {
      if (el.type !== "bun") {
        return null;
      }
      return (
        <Ingredient
          data={el}
          key={el._id}
          onClick={selectIngredient}
          counter={bunBurger && bunBurger._id === el._id ? 1 : null}
          handleModalIngredient={handleModalIngredient}
        />
      );
    })

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
          onClick={selectIngredient}
          key={el._id}
          counter={counter}
          handleModalIngredient={handleModalIngredient}
        />
      );
    })

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
          onClick={selectIngredient}
          key={el._id}
          counter={counter}
          handleModalIngredient={handleModalIngredient}
        />
      );
    })
  
    return (
      <>
      <section className={`${styles.burgerIngredients} mr-10`}>
        <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
        <div style={{ display: "flex" }}>
          <a href="#bun">
            <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
              {" "}
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

      {isModalIngredient && (
        <Modal toggleModal={handleModalIngredient} title="Детали ингредиента">
          <IngredientDetails selectedIngredient={selectedIngredient} />
        </Modal>
      )}
      </>
    );
  };
  
  BurgerIngredients.propTypes = {
    bunBurger: PropTypes.oneOfType([
      PropTypes.oneOf([null]).isRequired,
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }).isRequired,
    ]),
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
      })
    ).isRequired,
    // handleModalIngredient: PropTypes.func.isRequired,
    selectIngredient: PropTypes.func.isRequired,
    data: PropTypes.oneOfType([
      PropTypes.oneOf([null]).isRequired,
      PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
        }).isRequired
      ),
    ]),
  };
  
  export default BurgerIngredients;
