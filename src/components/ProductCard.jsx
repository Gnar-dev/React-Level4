import React from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { removeProduct, switchHeart } from "../axios/api";
const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goDetail = (e) => {
    e.stopPropagation();
    navigate(`/${item.id}`);
  };

  //리액트 쿼리
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(removeProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
  const switchHeartMutation = useMutation(switchHeart, {
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  // 완료, 취소를 handling하는 함수
  const heartSwitchButton = (e) => {
    e.stopPropagation();
    const payload = {
      id: item.id,
      heart: !item.heart,
    };
    switchHeartMutation.mutate(payload);
  };

  const handleRemoveButton = (e) => {
    e.stopPropagation();
    deleteMutation.mutate(item.id);
  };
  return (
    <Card onClick={goDetail}>
      <ImgBox>
        <img
          style={{ width: "300px", height: "400px" }}
          src={item?.imgURL}
          alt="술이미지"
        />
        <HeartBox onClick={heartSwitchButton}>
          {item?.heart === true ? <div>💖</div> : <div>🖤</div>}
        </HeartBox>
      </ImgBox>
      <ContentInner>
        <CardName>{item?.name}</CardName>
        <CardPrice>💰 {item?.price}</CardPrice>
      </ContentInner>
      <DeleteBtn onClick={handleRemoveButton}>삭제하기</DeleteBtn>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  height: 600px;
  border: 2px solid gray;
  box-shadow: 5px 5px 10px 2px gray;
  margin: 10px 10px;
  position: relative;
`;
const ImgBox = styled.div`
  position: relative;
`;
const HeartBox = styled.button`
  display: flex;
  position: absolute;
  bottom: 10px;
  right: 10px;
  transform: scale(1.5);
  z-index: 99;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardName = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin: 10px auto;
`;
const CardPrice = styled.div`
  color: black;
  font-weight: 700;
  font-size: 16px;
  padding: 5%;
`;

const DeleteBtn = styled.button`
  border: 0;
  background-color: transparent;
  font-weight: 700;
  color: red;
  padding: 5px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;
