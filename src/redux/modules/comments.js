import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [
    {
      id: "",
      name: "",
      body: "",
      status: false,
    },
  ],
  comment: {
    id: "",
    name: "",
    body: "",
    status: false,
  },
};

const counterSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, comments: [...state.comments, action.payload] };
    },
    remove: (state, action) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload,
        ),
      };
    },
    modify: (state, action) => {
      return {
        ...state,
        comments: state.comments.fil,
      };
    },
    // toggle: (state, action) => {
    //   return {
    //     ...state,
    //     comments: state.comments.map((comment) => {
    //       if (comment.id === action.payload) {
    //         return {
    //           ...comment,
    //           status: !comment.status,
    //         };
    //       } else {
    //         return comment;
    //       }
    //     }),
    //   };
    // },
    // getID: (state, action) => {
    //   return {
    //     ...state,
    //     comment: state.comments.find((comment) => {
    //       return comment.id === action.payload;
    //     }),
    //   };
    // },
  },
});
export default counterSlice;
