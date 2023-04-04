import { FC } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import {RootState} from "../../services/reducers/rootReducer";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

export const BurgerIngredientModal: FC = () => {
  const history = useHistory();
  const { id } = useParams<{id?: string}>();
  const selectedIngredient = useSelector((store: RootState) =>
    store.appReducer.data
      && store.appReducer.data.filter((el: any) => el._id === id)[0]
  );

  return (
    <Modal
      title="Детали ингредиента"
      handleModalClose={() => {
        history.push("/");
      }}
    >
      <IngredientDetails selectedIngredient={selectedIngredient}/>
    </Modal>
  );
};