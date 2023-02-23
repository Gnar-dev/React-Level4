import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AddProduct from "./page/AddProduct";
import ProductDetail from "./page/ProductDetail";

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const Router = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/:id" element={<ProductDetail />} />
        {/* <Route
          path="/products/:id"
          element={<PrivateRoute isLogin={isLogin} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
