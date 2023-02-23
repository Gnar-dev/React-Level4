import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Login = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setIsLogin(true);
    navigate("/");
  };
  return (
    <FormContainer>
      <Form className="login-form" onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicNickName">
          <Form.Label>닉네임</Form.Label>
          <Form.Control type="text" placeholder="닉네임을 입력하세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호을 입력하세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="자동 로그인" />
        </Form.Group>
        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;

const FormContainer = styled.div`
  margin: 100px auto;
  max-width: 700px;
`;
