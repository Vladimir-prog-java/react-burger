import AppHeader from "../../components/AppHeader/AppHeader";
import PersonalAreaMenu from "../../components/PersonalArea/PersonalAreaMenu";
import styles from "./personal-area.module.css"

export const OrdersHistoryPage = () => (
  <>
    <AppHeader />
    <div className={styles.container}>
      <PersonalAreaMenu
        description="просмотреть свою историю заказов"
      />
      <div></div>
    </div>
  </>
);
