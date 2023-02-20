import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate();
  const navList = ["위스키", "와인", "전통주", "럼", "리퀴르"];
  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  const haveToLogin = () => {
    navigate("/login");
  };
  return (
    <NavbarContainer>
      <TitleWrap>
        <Link to="/">
          <Title>기범's 술창고</Title>
          <TitleImg src="img/neon.jpg" alt="술술술" />
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
          {navList.map((e) => {
            return <li>{e}</li>;
          })}
        </NavUl>
        <NavPosition>
          <NavInputWrap>
            <NavIcon
              class="material-symbols-rounded"
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
  color: white;
`;
const TitleImg = styled.img`
  width: 100%;
  height: 300px;
`;

///////Login CSS//////////
const LoginWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
`;
const NavUl = styled.ul`
  display: flex;
  gap: 10vw;
  font-size: 20px;
  font-weight: 700;
  color: red;
`;

const NavPosition = styled.div`
  position: absolute;
  right: 5vw;
`;
const NavInputWrap = styled.div`
  position: relative;
  z-index: 1;
  width: 7vw;
  height: 22px;
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
  -webkit-font-feature-settings: "liga";
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
  width: 100%;
  height: 100%;
  z-index: -1;
  border: 0;
  border-bottom: 2px solid black;
  outline: none;
`;