import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
      //navigate(`/products/${keyword}`)
    }
  };
  const haveToLogin = () => {
    navigate("/login");
  };
  const addProductPage = () => {
    navigate("/product/add");
  };
  const goHome = () => {
    navigate("/");
  };

  return (
    <NavbarContainer>
      <TitleWrap>
        <Link to="/">
          <Title>기범's 술창고</Title>
          <TitleImg src="img/whiskey.jpg" alt="술술술" />
        </Link>
      </TitleWrap>
      <LoginWrap>
        {isLogin ? (
          <LogoutBtn onClick={() => setIsLogin(false)}>로그아웃</LogoutBtn>
        ) : (
          <LoginBtn onClick={haveToLogin}>로그인</LoginBtn>
        )}
      </LoginWrap>
      <NavWrap>
        <NavUl>
          <Navli onClick={addProductPage}>제품등록</Navli>
          <Navli onClick={goHome}>제품확인</Navli>
        </NavUl>
        <NavPosition>
          <NavInputWrap>
            <NavIcon
              classNa="material-symbols-rounded"
              onClick={(e) => search(e)}
            >
              search
            </NavIcon>
            <NavInput
              type="text"
              placeholder="제품 검색"
              onKeyDown={(e) => search(e)}
            />
          </NavInputWrap>
        </NavPosition>
      </NavWrap>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  position: relative;
`;
///////Title CSS//////////
const TitleWrap = styled.div`
  position: relative;
`;
const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 900;
  color: black;
`;
const TitleImg = styled.img`
  width: 100%;
  height: 350px;
`;

///////Login CSS//////////
const LoginWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 100px;
  z-index: 99;
  color: white;
  font-size: 24px;
`;
const LogoutBtn = styled.div`
  cursor: pointer;
`;
const LoginBtn = styled.div`
  cursor: pointer;
`;
///////NAV CSS//////////
const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  transform: translateY(-8px);
`;
const NavUl = styled.ul`
  margin: 30px auto;
  display: flex;
  gap: 10vw;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
const Navli = styled.li`
  :hover {
    color: gold;
  }
`;

const NavPosition = styled.div`
  position: absolute;
  right: 5vw;
`;
const NavInputWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 200px;
  height: 30px;
  margin: 30px auto;
`;
const NavIcon = styled.span`
  font-family: "Material Symbols Rounded";
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
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-40%);
  cursor: pointer;
`;
const NavInput = styled.input`
  position: absolute;
  z-index: -1;
  border: 0;
  border-bottom: 2px solid black;
  outline: none;
  background-color: black;
  ::placeholder {
    padding: 5px;
    font-weight: 700;
    color: white;
  }
`;
