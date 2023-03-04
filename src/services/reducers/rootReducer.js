import { combineReducers } from "redux";
import { interfaceReducer } from "./interface-reducer";
import { appReducer } from "./app-reducer";
import { ingredientsReducer } from "./ingredients-reducer";
import { orderReducer } from "./order-reducer";

export const rootReducer = combineReducers({
  interfaceReducer,
  appReducer,
  ingredientsReducer,
  orderReducer
});
