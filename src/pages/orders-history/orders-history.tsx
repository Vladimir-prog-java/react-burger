import { FC } from "react";
import PersonalAreaMenu from "../../components/PersonalArea/PersonalAreaMenu";
import styles from "./personal-area.module.css"

export const OrdersHistoryPage: FC = () => (
  <>
    <div className={styles.container}>
      <PersonalAreaMenu
        description="просмотреть свою историю заказов"
      />
      <div></div>
    </div>
  </>
);
