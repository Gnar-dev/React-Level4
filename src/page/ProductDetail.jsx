import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByID } from "../axios/api";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import styled from "styled-components";
function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useQuery("product", () => getProductByID(id));
  console.log(data);
  // const filterId = data?.filter((product) => product.id === id);
  // console.log(filterId);
  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <Card>
          <ImgBox>
            <img
              style={{ width: "300px", height: "400px" }}
              src={data.imgURL}
              alt="미리보기"
            />
          </ImgBox>
          <ContentInner>
            <CardName>{data.name}</CardName>
            <CardPrice>{data.price}</CardPrice>
          </ContentInner>
        </Card>
        <button onClick={handleButtonClick}>이전 페이지로 가기</button>
      </div>
      <div>
        <ul>
          {data.comments.map((e) => (
            <li>{e.body}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductDetail;

const Card = styled.div`
  width: 300px;
  height: 600px;
  border: 2px solid gray;
  box-shadow: 5px 5px 10px 2px gray;
  margin: 10px 10px;
  overflow: hidden;
`;

const ImgBox = styled.div`
  position: relative;
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
  color: red;
  font-weight: 700;
  font-size: 16px;
  padding: 5%;
`;
