import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addProduct } from "../axios/api";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import ProductCard from "./../components/ProductCard";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(addProduct, {
    onSuccess: () => {
      //
      queryClient.invalidateQueries("products ");
    },
  });

  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case "01":
        return alert(
          `[필수 입력 값 검증 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(이름 : '${params.name}', 가격 : '${params.price}')`,
        );
      default:
        return `시스템 내부 오류가 발생하였습니다. 고객센터로 연락주세요.`;
    }
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // contents의 변경을 감지하는 함수
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleImgURLChange = (event) => {
    setImgURL(event.target.value);
  };

  const handleSubmit = (event) => {
    navigate("/");
    if (!name || !price) {
      return getErrorMsg("01", { name, price });
    }

    const newProduct = {
      id: uuidv4(),
      imgURL,
      name,
      heart: false,
      price,
      comments: [
        {
          // id: 1,
          // nick: "gibeom",
          // body: "some comment",
          // postId: 1,
          // status: false
        },
      ],
    };
    mutation.mutate(newProduct);
    setName("");
    setPrice("");
    setImgURL("");
  };

  return (
    <AddContainer>
      <AddForm onSubmit={handleSubmit}>
        <Label>상품명 : </Label>
        <Input
          label="상품명"
          placeholder="상품명을 입력해주세요."
          value={name}
          onChange={handleNameChange}
          type="text"
        />
        <Label>가격 : </Label>
        <Input
          label="가격"
          placeholder="가격을 입력해주세요."
          value={price}
          onChange={handlePriceChange}
          type="text"
        />
        <Label>이미지 주소 : </Label>
        <Input
          label="이미지 주소"
          placeholder="이미지 주소를 입력해주세요."
          value={imgURL}
          onChange={handleImgURLChange}
          type="text"
        />
        <Button type="submit">등록하기</Button>
      </AddForm>
      <Card>
        <ImgBox>
          <img
            style={{ width: "300px", height: "400px" }}
            src={imgURL}
            alt="미리보기"
          />
        </ImgBox>
        <ContentInner>
          <CardName>{name}</CardName>
          <CardPrice>{price}</CardPrice>
        </ContentInner>
      </Card>
    </AddContainer>
  );
};

export default AddProduct;

const AddContainer = styled.div`
  padding: 5%;
  display: flex;
  justify-content: center;
  gap: 200px;
`;
const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: 900;
  margin: 20px 0;
`;

const Input = styled.input`
  max-width: 1000px;
  min-width: 700px;
  height: 50px;
  padding: 10px;
  border: 2px solid;
  border-radius: 10px;
  ::placeholder {
    font-size: 18px;
    font-weight: 700;
  }
`;

const Button = styled.button`
  margin-top: 140px;
  max-width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: transparent;
  border: 2px solid black;
  padding: 10px;
  font-size: 18px;
  font-weight: 900;
  :hover {
    border: 2px solid gray;
    background-color: black;
    color: white;
  }
`;
const Card = styled.div`
  width: 300px;
  height: 600px;
  border: 2px solid gray;
  box-shadow: 5px 5px 10px 2px gray;
  margin: 10px 10px;
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
