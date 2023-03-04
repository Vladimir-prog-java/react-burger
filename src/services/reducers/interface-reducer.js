import {
  OPEN_MODAL_INGREDIENT_DETAILS,
  CLOSE_MODAL_INGREDIENT_DETAILS,
  OPEN_MODAL_ORDER_DETAILS,
  CLOSE_MODAL_ORDER_DETAILS,
} from "../actions/interface-actions";

const initialState = {
  isModalIngredientDetailsOpen: false,
  isModalOrderDetailsOpen: false,
};

export const interfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL_INGREDIENT_DETAILS: {
      return {
        ...state,
        isModalIngredientDetailsOpen: true,
      }
    }
    case CLOSE_MODAL_INGREDIENT_DETAILS: {
      return {
        ...state,
        isModalIngredientDetailsOpen: false,
      }
    }
    case OPEN_MODAL_ORDER_DETAILS: {
      return {
        ...state,
        isModalOrderDetailsOpen: true,
      }
    }
    case CLOSE_MODAL_ORDER_DETAILS: {
      return {
        ...state,
        isModalOrderDetailsOpen: false,
      }
    }
    default: {
      return state;
    }
  }
};
