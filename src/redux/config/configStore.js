import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/comments";
import users from "../modules/users";
import products from "../modules/products";

const store = configureStore({
  reducer: {
    comments: comments,
    products: products,
    users: users,
  },
});

export default store;
