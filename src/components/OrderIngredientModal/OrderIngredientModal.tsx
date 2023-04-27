import { useCallback, useEffect, FC } from "react";
import { TOrderIngredientsModal } from "../../services/types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import style from "./OrderIngredientModal.module.css";
import OrderIngredients from "../OrderIngredients/OrderIngredients";

const OrderIngredientModal: FC<TOrderIngredientsModal> = ({ order, handleModalClose, ingredients }) => {
  const closeModalWindowByEsc = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        handleModalClose && handleModalClose();
      }
    },
    [handleModalClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeModalWindowByEsc, false);
    return () => {
      document.removeEventListener("keydown", closeModalWindowByEsc, false);
    };
  }, [closeModalWindowByEsc]);
  
  return(
    <>
      <ModalOverlay handleModalClose={handleModalClose}/>
      <div className={style.modal}>
        <OrderIngredients order={order} handleModalClose={handleModalClose} ingredients={ingredients} isModal={true}/>
      </div>
    </>
  )
};

export default OrderIngredientModal;