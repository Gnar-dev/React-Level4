import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import AddProductCard from "../components/AddProductCard";
import ProductCard from "../components/ProductCard";
import api from "../axios/api";
import { getProducts } from "../axios/api";
import { useQuery } from "react-query";

const ProductAll = () => {
  const { isLoading, isError, data } = useQuery("products", getProducts);

  if (isLoading) {
    return <h1>로딩중입니다....</h1>;
  }
  if (isError) {
    return <h1>오류가 발생했습니다 !!</h1>;
  }

  return (
    <ProductContainer>
      {data.map((product, i) => (
        <ProductCard key={i} item={product} />
      ))}
      <AddProductCard />
    </ProductContainer>
  );
};

export default ProductAll;

const ProductContainer = styled.div`
  display: flex;
  padding: 5%;
`;
