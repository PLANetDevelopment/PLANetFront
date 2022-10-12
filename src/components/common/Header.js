import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Icon } from "@iconify/react";

function Header({ name, onClick, dropDown, rightIcon, onRightClick, goBack }) {
  const history = useNavigate();
  const setRightIcon = (rightIcon) => {
    let content = "";
    switch (rightIcon) {
      case "delete":
        content = (
          <Icon
            icon="carbon:trash-can"
            style={{ opacity: 0.4 }}
            className="right-icon delete"
            onClick={onRightClick}
          />
        );
        break;
      case "share":
        content = (
          <Icon
            icon="fluent:share-ios-20-regular"
            color="white"
            className="right-icon share"
            onClick={onRightClick}
          />
        );
        break;
      case "coupon":
        content = <div className="right-coupon">등록</div>;
        break;

      default:
        break;
    }
    return content;
  };
  return (
    <StyledHeader>
      {goBack && (
        <IoIosArrowForward
          className="forward-arrow"
          onClick={() => {
            history(-1);
          }}
        />
      )}

      <div className="header-name" onClick={onClick}>
        {name}
      </div>
      {dropDown && (
        <IoIosArrowForward className="dropdown-arrow" onClick={onClick} />
      )}
      {setRightIcon(rightIcon)}
    </StyledHeader>
  );
}

export default Header;

Header.defaultProps = {
  name: "",
  dropDown: false,
  goBack: true,
  rightIcon: "",
  onClick: () => {},
  onRightClick: () => {},
};

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: calc(100% - 32px); //전체 페이지 패딩값 제외
  background-color: rgb(var(--navy));

  .forward-arrow {
    position: absolute;
    left: 0;
    margin-left: -7px;
    color: white;
    transform: rotate(180deg);
    width: 28px;
    height: 28px;
    padding: 5px 0 5px 5px;
    cursor: pointer;
  }
  .header-name {
    font-size: var(--header);
    font-weight: 600;
  }
  .dropdown-arrow {
    opacity: 0.4;
    width: 13.5px;
    height: 13.5px;
    transform: rotate(90deg);
    margin-left: 3px;
  }
  .right-icon {
    position: absolute;
    right: 0;
    margin-right: -7px;
    width: 28px;
    height: 28px;
    padding: 5px 0 5px 5px;
  }
  .share {
    width: 32px;
    height: 32px;
    opacity: 0.7;
  }
  .right-coupon {
    position: absolute;
    right: 0;
    text-align: right;
    font-weight: 500;
    font-size: 14px;
  }
`;
