import { FC } from "react";
import PersonalAreaMenu from "../../components/PersonalArea/PersonalAreaMenu";
import PersonalAreaForm from "../../components/PersonalArea/PersonalAreaForm"
import styles from "./profile.module.css"

export const ProfilePage: FC = () => (
  <>
    <div className={styles.container}>
      <PersonalAreaMenu
        description="изменить свои персональные данные"
      />
      <div>
        <PersonalAreaForm />
      </div>
    </div>
  </>
);
