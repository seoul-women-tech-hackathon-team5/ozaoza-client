import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import mainImage from "/assets/icons/main.svg";
import mainSelectImage from "/assets/icons/main-fill.svg";
import makeImage from "/assets/icons/make.svg";
import makeSelectImage from "/assets/icons/make-fill.svg";
import myImage from "/assets/icons/mypage.svg";
import mySelectImage from "/assets/icons/mypage-fill.svg";

const NavBarArticle = styled.article`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 83px;
  background-color: white; /* Set background color to white */
  border-top: 1px solid #D9D9D9;
  border-radius: 0px;
  margin: 0px;
  z-index: 1; /* Ensure it's above other content */
`;

const TabMenuUl = styled.ul`
  display: flex;
  width: 100%;
`;

const TabMenuLi = styled.li`
  width: 130px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: #AEAEAE;
  gap: 3px;
`;

const SelectP = styled.p`
  color: #558BCF;
`;

export default function NavBar({ type }) {
  NavBar.propTypes = {
    type: PropTypes.oneOf(["main", "make", "my"]).isRequired,
  };

  const navigate = useNavigate();

  return (
    <NavBarArticle>
      <nav>
        <TabMenuUl>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/main");
              }}
            >
              {type === "main" ? (
                <img src={mainSelectImage} alt="홈으로 이동" />
              ) : (
                <img src={mainImage} alt="홈로 이동" />
              )}
              {type === "main" ? <SelectP>홈</SelectP> : <p>홈</p>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/certificate");
              }}
            >
              {type === "make" ? (
                <img src={makeSelectImage} alt="make으로 이동" />
              ) : (
                <img src={makeImage} alt="make으로 이동" />
              )}
              {type === "make" ? <SelectP>카드 제작</SelectP> : <p>카드 제작</p>}
            </TabMenuLink>
          </TabMenuLi>
          <TabMenuLi>
            <TabMenuLink
              onClick={() => {
                navigate("/my");
              }}
            >
              {type === "my" ? (
                <img src={mySelectImage} alt="my로 이동" />
              ) : (
                <img src={myImage} alt="my로 이동" />
              )}
              {type === "my" ? <SelectP>서비스 소개</SelectP> : <p>서비스 소개</p>}
            </TabMenuLink>
          </TabMenuLi>
        </TabMenuUl>
      </nav>
    </NavBarArticle>
  );
}
