import React from "react";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";

const Ingredient = (props) => {
    const { data, onClick, counter, handleModalIngredient } = props;
    return (
      <div
        className={`${styles.ingredientContainer} pl-4 pr-4`}
        onClick={onClick(data)}
      >
        <div onClick={handleModalIngredient}>
          <div className={`${styles.ingredient} pl-4 pr-4`}>
            <img src={data.image} alt="" />
            <div className={`${styles.ingredientPrice} mt-1 mb-1`}>
              <p className="text text_type_digits-default mr-1">{data.price}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
          <p
            className={`text text_type_main-default pb-6 mt-1 ${styles.ingredientName}`}
          >
            {data.name}
          </p>
          {counter && <Counter count={counter} size="default" />}
        </div>
      </div>
    );
  };
  
  Ingredient.propTypes = {
    counter: PropTypes.oneOfType([
      PropTypes.oneOf([null]).isRequired,
      PropTypes.number.isRequired,
    ]),
    handleModalIngredient: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    data: PropTypes.oneOfType([
      PropTypes.oneOf([null]).isRequired,
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
      }),
    ]),
  };
  
  export default Ingredient;
