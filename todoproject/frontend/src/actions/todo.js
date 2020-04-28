import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from "./types";

// GET ITEMS
export const getItems = () => (dispatch, getState) => {
  axios
    .get("/api/todo/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE ITEM
export const deleteItem = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/todo/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteItem: "Item Deleted" }));
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addItem = (todo) => (dispatch, getState) => {
  axios
    .post("/api/todo/", todo, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addItem: "Item Added" }));
      dispatch({
        type: ADD_ITEM,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
