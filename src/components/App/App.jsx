import React, { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import * as _ from "lodash";
import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../services/actions/app-actions";

function App() {

  const { data, error } = useSelector((store) => store.appReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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

export default App;
