import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation, useQueryClient } from "react-query";
const AddProductCard = () => {
  const navigate = useNavigate();

  const GotoAdd = () => {
    navigate("/product/add");
  };
  return (
    <>
      <AddCard onClick={GotoAdd}>
        <PlusIcon>add_circle</PlusIcon>
      </AddCard>
    </>
  );
};

export default AddProductCard;

const AddCard = styled.div`
  width: 300px;
  height: 600px;
  border: 2px solid gray;
  box-shadow: 5px 5px 10px 2px gray;
  margin: 10px 10px;
`;
const PlusIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  transform: scale(2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
