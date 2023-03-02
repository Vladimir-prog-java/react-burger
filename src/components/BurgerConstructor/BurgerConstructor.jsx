import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrder } from "../../services/actions/app-actions";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import styles from "./BurgerConstructor.module.css";
import { SET_SELECT_INGREDIENT } from "../../services/actions/app-actions";
import { CLOSE_MODAL_ORDER_DETAILS} from "../../services/actions/interface-actions"
import BurgerConstructorInnerIngredients from "./BurgerConstructorIngredients";

const BurgerConstructor = () => {

  const { bunBurger, ingredients } = useSelector((store) => store.appReducer);
  // console.log('ingredients', ingredients)
  
  const { isModalOrderDetailsOpen } = useSelector(
    (store) => store.interfaceReducer
  );

  const dispatch = useDispatch();

  const handleModalClose = useCallback(() => {
    dispatch({type: CLOSE_MODAL_ORDER_DETAILS});
  }, [dispatch]);

  const ingredientsTotalPrice = ingredients.reduce((acc, el) => acc += el.price, 0);
  const bunTotalPrice = bunBurger? bunBurger.price * 2 : 0;
  const totalPrice = bunTotalPrice + ingredientsTotalPrice;

  const [{ isDragContainer }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(element) {
      dispatch({ type: SET_SELECT_INGREDIENT, ingredient: element });
    },
    collect: (monitor) => ({
      isDragContainer: monitor.canDrop(),
    }),
  });

  const burgerConstructorIngredientPlaceStyle = isDragContainer
    ? { border: "1px solid lightgreen" }
    : null;

  return (
    <>
    <section className={styles.burgerConstructor}>
    <div
        className={`mt-25 mb-10 ml-4 ${styles.burgerConstructorIngredientPlace}`}
        ref={dropTarget}
        style={burgerConstructorIngredientPlaceStyle}
      >
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
            {ingredients.map((el, index) => (
              <BurgerConstructorInnerIngredients el={el} index={index} key={el.key}/>
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
          htmlType="button"
          onClick={() =>
            bunBurger && ingredients && dispatch(getOrder(ingredients, bunBurger))}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
     {isModalOrderDetailsOpen && (
      <Modal toggleModal={handleModalClose} title="">
        <OrderDetails />
      </Modal>
    )}
    </>
  );
};

export default BurgerConstructor;
