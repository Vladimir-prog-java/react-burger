import {FC} from "react";
import { useSelector } from "react-redux";
import {RootState} from "../../services/reducers/rootReducer";
import doneImg from "../../images/done.svg";

const OrderDetails: FC = () => {
  const { orderNumber } = useSelector((store: RootState) => store.appReducer);
  return (
    <>
      <h2 className="text text_type_digits-large mb-8">{orderNumber}</h2>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={doneImg} alt="doneLogo" className="mb-15" />
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
