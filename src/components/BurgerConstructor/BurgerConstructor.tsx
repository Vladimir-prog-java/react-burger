import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { useDrop } from "react-dnd";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getOrder } from "../../services/actions/app-actions";
import styles from "./BurgerConstructor.module.css";
import { SET_ADDED_INGREDIENT } from "../../services/actions/app-actions";
import { TData } from "../../services/types";
import {RootState} from "../../services/reducers/rootReducer";
// import { CLOSE_MODAL_ORDER_DETAILS} from "../../services/actions/interface-actions"
import BurgerConstructorInnerIngredients from "./BurgerConstructorIngredients";

const BurgerConstructor: FC = () => {

  const { bun, ingredients } = useSelector((store: RootState) => store.appReducer);
  const { redirectToLoginForOrder, redirectToOrderDetails } = useSelector(
    (store: RootState) => store.authorizationReducer
  );
  const dispatch = useDispatch();

  let location = useLocation();

  const bunTotalPrice = bun ? bun.price * 2 : 0;
  const ingredientsTotalPrice = [...ingredients].reduce(
    (acc: number, el: TData) => (acc += el.price),
    0
  );
  const totalPrice = bunTotalPrice + ingredientsTotalPrice;

  const [{ isDragContainer }, dropTarget] = useDrop({
    accept: "ingredient",
    drop(element) {
      dispatch({ type: SET_ADDED_INGREDIENT, ingredient: element });
    },
    collect: (monitor) => ({
      isDragContainer: monitor.canDrop(),
    }),
  });

  const burgerConstructorIngredientPlaceStyle = isDragContainer
    ? { border: "1px solid lightgreen" }
    : { border: "0" };

  return (
    <section className={styles.burgerConstructor}>
      <div
        className={`mt-25 mb-10 ml-4 ${styles.burgerConstructorIngredientPlace}`}
        ref={dropTarget}
        style={burgerConstructorIngredientPlaceStyle}
      >
        {bun && (
          <div className="ml-8 mb-4">
            <ConstructorElement
              type="top"
              isLocked
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
        )}
        {
          <div className={`pr-2 ${styles.scrollbar}`}>
            {ingredients.map((el: TData, index: number) => (
              <BurgerConstructorInnerIngredients
                el={el}
                index={index}
                key={el.key}
              />
            ))}
          </div>
        }
        {bun && (
          <div className="ml-8">
            <ConstructorElement
              type="bottom"
              isLocked
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
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
          onClick={async () => {
            bun && ingredients && dispatch(getOrder(ingredients, bun));
          }}
        >
          Оформить заказ
        </Button>
      </div>
      {redirectToLoginForOrder && <Redirect to="/login" />}
      {redirectToOrderDetails && (
        <Redirect
          to={{
            pathname: "/order-details",
            state: { background: location },
          }}
        />
      )}
    </section>
  );
};

export default BurgerConstructor;
