import React, {FC, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../../services/actions/app-actions";
import ModalSwitch from "./ModalSwitch"

const App:FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ModalSwitch />
    </BrowserRouter>
  );
}

export default App;
