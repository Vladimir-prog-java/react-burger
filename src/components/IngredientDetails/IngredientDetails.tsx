import {FC} from "react";
import styles from "./IngredientDetails.module.css";
import { TData } from "../../services/types";

const IngredientDetails: FC<{ selectedIngredient: TData }> = ({ selectedIngredient }) => {

  return (
    <>
      <img
        src={selectedIngredient.image_large}
        alt={selectedIngredient.name}
        className="mb-4"
      />
      <h2 className="text text_type_main-medium mb-8">
        {selectedIngredient.name}
      </h2>
      <div className={`${styles.informationContainer} mb-15`}>
        <div className={styles.flexCenter}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {selectedIngredient.calories}
          </p>
        </div>
        <div className={styles.flexCenter}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {selectedIngredient.proteins}
          </p>
        </div>
        <div className={styles.flexCenter}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {selectedIngredient.fat}
          </p>
        </div>
        <div className={styles.flexCenter}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {selectedIngredient.carbohydrates}
          </p>
        </div>
      </div>
    </>
  );
};
  
  export default IngredientDetails;
