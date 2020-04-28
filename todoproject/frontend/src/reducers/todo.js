import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "../actions/types.js";

const initialState = {
  todo: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        todo: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        todo: state.todo.filter((todo) => todo.id !== action.payload),
      };
    case ADD_ITEM:
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
}
