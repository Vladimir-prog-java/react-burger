import { FC } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../../components/AppHeader/AppHeader";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import styles from "./home.module.css";
import { useSelector } from "react-redux";
import {RootState} from "../../services/reducers/rootReducer";

export const HomePage: FC = () => {
  const { data, error } = useSelector((store: RootState) => store.appReducer);
    
  return (
    <>
      <AppHeader />
      {error && (
        <h2 className={`${styles.main} text text_type_main-medium`}>
          {error}. Перезагрузите страницу
        </h2>
      )}
      <main className={styles.main}>
        {data && (
          <div className={styles.container}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </div>
        )}
      </main>      
    </>
  );
}
