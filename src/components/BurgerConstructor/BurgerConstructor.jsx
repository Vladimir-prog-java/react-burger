import React, {useState} from "react";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import styles from "./BurgerConstructor.module.css";

const BurgerConstructor = (props) => {

  const { bunBurger, ingredients } = props;
  
  const [isModalOrder, setIsModalOrder] = useState(false);

  const ingredientsTotalPrice = ingredients.reduce((acc, el) => acc += el.price, 0);
  const bunTotalPrice = bunBurger? bunBurger.price * 2 : 0;
  const totalPrice = bunTotalPrice + ingredientsTotalPrice;

  const handleModalOrder = () =>
  setIsModalOrder(!isModalOrder);

  return (
    <>
    <section className={styles.burgerConstructor}>
      <div className="mt-25 mb-10 ml-4">
        {bunBurger && (
          <div className="ml-8 mb-4">
            <ConstructorElement
              type="top"
              isLocked
              text={`${bunBurger.name} (верх)`}
              price={bunBurger.price}
              thumbnail={bunBurger.image}
            />
          </div>
        )}
        {
          <div className={`pr-2 ${styles.scrollbar}`}>
            {ingredients.map((el) => (
              <div key={el.key} className={`mb-4 ${styles.mainIngredients}`}>
                <div className="mr-2">
                  <DragIcon type="primary" />
                </div>
                <ConstructorElement
                  text={el.name}
                  price={el.price}
                  thumbnail={el.image}
                />
              </div>
            ))}
          </div>
        }
        {bunBurger && (
          <div className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked
              text={`${bunBurger.name} (низ)`}
              price={bunBurger.price}
              thumbnail={bunBurger.image}
            />
          </div>
        )}
      </div>
      <div className={`${styles.orderContainer} mr-4`}>
        <div className={`${styles.totalPriceContainer} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          type="primary"
          size="large"
          onClick={handleModalOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
     {isModalOrder && (
      <Modal toggleModal={handleModalOrder} title="">
        <OrderDetails />
      </Modal>
    )}
    </>
  );
};

BurgerConstructor.propTypes = {
  bunBurger: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ]),
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleModalOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
