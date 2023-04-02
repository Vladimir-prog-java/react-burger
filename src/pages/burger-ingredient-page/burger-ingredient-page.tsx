import { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import AppHeader from "../../components/AppHeader/AppHeader";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {RootState} from "../../services/reducers/rootReducer";
import styles from "./burger-ingredient-page.module.css";

export const BurgerIngredientPage: FC = () => {
  const { id } = useParams<{id?: string}>();
  const selectedIngredient = useSelector((store: RootState) =>
    store.appReducer.data
      && store.appReducer.data.filter((el: any) => el._id === id)[0]
  );
  
  return (
    <>
      <AppHeader />
      <div className={styles.modal}>
        <header className={`${styles.modalHeader} pt-10 pl-10 pr-10`}>
          <h2 className="text text_type_main-large">Детали ингредиента</h2>
        </header>

        <section className={`${styles.modalMain} mt-4`}>
          {selectedIngredient && <IngredientDetails selectedIngredient={selectedIngredient}/>}
        </section>
      </div>
    </>
  );
};
