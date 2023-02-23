import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      id: "1",
      imgURL:
        "https://w.namu.la/s/b1e0cfaf1dd515170959b1eab4d858996e27a095a5b52726ed60410d7e8a7842cfea02d1c16aa7171c67a3aca21092fa514ab5c6f21514dcad3914c2f63b9e2a6399a2df24dbdd5a1196cb8b75df56af4fe7d2cd1f357ae235e3789e6bef69e6",
      name: "valbenie18y",
      heart: false,
      price: "200000",
      comments: [
        {
          postId: "1",
          nick: "gibeom",
          body: "",
        },
      ],
    },
  ],
  product: {
    id: "",
    imgURL: "",
    name: "",
    heart: false,
    price: "",
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, products: [...state.products, action.payload] };
    },
    remove: (state, action) => {
      return {
        ...state,
        products: state.products.filter((todo) => todo.id !== action.payload),
      };
    },
    getID: (state, action) => {
      return {
        ...state,
        product: state.products.find((product) => {
          return product.id === action.payload;
        }),
      };
    },
    addComment: (state, action) => {
      return { ...state, comments: [...state.comments, action.payload] };
    },
    removeComment: (state, action) => {
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.postId !== action.payload,
        ),
      };
    },
    modifyComment: (state, action) => {
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.postId === action.payload) {
            return {
              ...comment,
              nick: comment.nick,
              body: comment.body,
            };
          } else {
            return comment;
          }
        }),
      };
    },
  },
});

// export
export default productsSlice.reducer;
export const { add, remove, getID, addComment, removeComment, modifyComment } =
  productsSlice.actions;
