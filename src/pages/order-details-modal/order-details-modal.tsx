import { FC } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export const OrderDetailsModal: FC = () => {
  const history = useHistory();

  return (
    <Modal
      title=""
      handleModalClose={() => {
        history.push("/");
      }}
    >
      <OrderDetails/>
    </Modal>
  );
};