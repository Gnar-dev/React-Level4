import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/comments";
import users from "../modules/users";
import products from "../modules/products";

const store = configureStore({
  reducer: {
    comments,
    products,
    users,
  },
});

export default store;
