import { useSelector } from "../../services/hooks";
import { Link, useLocation } from "react-router-dom";
import * as _ from "lodash";
import style from "./order-tape-page.module.css";
import OrderBox from "../../components/OrderBox/OrderBox";
import { FC } from "react";

export const OrderTapePage: FC = () => {
  const { total, totalToday, orders, errorWSOrderTape } = useSelector(
    (store) => store.wsOrderTapeReducer
  );
  let location = useLocation();

  return (
    <>
      <section className={style.container}>
        <h2 className="text text_type_main-large mb-5">
          {errorWSOrderTape ? errorWSOrderTape : "Лента заказов"}
        </h2>
        <div className={style.innerContainer}>
          <div className={style.feedContainer}>
            {orders &&
              orders.map((el) => {
                return (
                  <Link
                    to={{
                      pathname: `feed/${el.number}`,
                      state: { background: location },
                    }}
                    key={_.uniqueId()}
                  >
                    <OrderBox element={el} key={el._id} />
                  </Link>
                );
              })}
          </div>
          <div className={style.infoContainer}>
            <div className={`${style.ordersBoard} mb-15`}>
              <div className="mr-8">
                <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
                <div>
                  {orders &&
                    orders.map(
                      (el, index) =>
                        index < 10 &&
                        el.status === "done" && (
                          <p
                            className="text text_type_digits-default"
                            style={{ color: "#00CCCC" }}
                            key={el.number}
                          >
                            {el.number}
                          </p>
                        )
                    )}
                </div>
              </div>
              <div>
                <h3 className="text text_type_main-medium mb-6">В работе:</h3>
                <div>
                  {orders &&
                    orders.map(
                      (el, index) =>
                        index < 10 &&
                        el.status !== "done" && (
                          <p
                            className="text text_type_digits-default"
                            key={el.number}
                          >
                            {el.number}
                          </p>
                        )
                    )}
                </div>
              </div>
            </div>
            <div className="mb-15">
              <h2 className="text text_type_main-medium">
                Выполнено за все время:
              </h2>
              <p className="text text_type_digits-large">{total}</p>
            </div>
            <div>
              <h2 className="text text_type_main-medium">
                Выполнено за сегодня:
              </h2>
              <p className="text text_type_digits-large">{totalToday}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
