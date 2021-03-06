import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Category.css";

import { FaChevronLeft } from "react-icons/fa";

const expendData = [
  {
    emoji: "๐",
    exType: "๋งํธ",
    count: "120๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐",
    exType: "๊ตํต",
    count: "80๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐ฌ",
    exType: "๋ฌธํ์ํ",
    count: "50๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐ฌ",
    exType: "๊ธฐํ",
    count: "30๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐",
    exType: "๊ต์ก",
    count: "10๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐ต",
    exType: "๊ฒฝ์กฐ์ฌ/ํ๋น",
    count: "4๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐ฅ",
    exType: "์๋ฃ/๊ฑด๊ฐ",
    count: "3๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐",
    exType: "๊ฐ์ ",
    count: "2๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐ฑ",
    exType: "ํต์ ",
    count: "1๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "โ๏ธ",
    exType: "์ํํ",
    count: "0๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐ญ",
    exType: "์๋น",
    count: "0๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
  {
    emoji: "๐งพ",
    exType: "๊ณต๊ณผ๊ธ",
    count: "0๊ฐ",
    memo: "์ฝ๋ก ์ฌ๋จน์",
    ecoList: [
      {
        eco: "G",
        ecoDetail: "๋คํ์ฉ๊ธฐ ์ฌ์ฉ",
        etcMemo: null,
      },
      {
        eco: "G",
        ecoDetail: "์ค๊ณ ๊ฑฐ๋/๋๋/๊ธฐ๋ถ",
        etcMemo: null,
      },
    ],
  },
];

function ExpendDetail() {
  const data = useLocation().state;
  const history = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let exType;
  if (data.exType === "๋งํธ") {
    exType = 0;
  } else if (data.exType === "๊ตํต") {
    exType = 1;
  } else if (data.exType === "๋ฌธํ์ํ") {
    exType = 2;
  } else if (data.exType === "๊ธฐํ") {
    exType = 3;
  } else if (data.exType === "๊ต์ก") {
    exType = 4;
  } else if (data.exType === "๊ฒฝ์กฐ์ฌ/ํ๋น") {
    exType = 5;
  } else if (data.exType === "์๋ฃ/๊ฑด๊ฐ") {
    exType = 6;
  } else if (data.exType === "๊ฐ์ ") {
    exType = 7;
  } else if (data.exType === "ํต์ ์ฌ") {
    exType = 8;
  } else if (data.exType === "์ํํ") {
    exType = 9;
  } else if (data.exType === "์๋น") {
    exType = 10;
  } else if (data.exType === "๊ณต๊ณผ๊ธ") {
    exType = 11;
  }

  const renderEcoExpendList = () => {
    let renderEcoExpendList = [];

    if (data.ecodata === "eco") {
      for (let i = 0; i < expendData[exType].ecoList.length; i++) {
        renderEcoExpendList.push(
          <div className="dateDetail">
            <p style={{ color: "#00C982" }}>โ</p>
            <p>sfdf {expendData[exType].memo}</p>
            <p>{expendData[exType].ecoList[i].ecoDetail}</p>
          </div>
        );
      }
    } else {
      for (let i = 0; i < expendData[exType].ecoList.length; i++) {
        renderEcoExpendList.push(
          <div className="dateDetail">
            <p style={{ color: "#566479" }}>โ</p>
            <p>{expendData[exType].memo} </p>
            {expendData[exType].ecoList[i].ecoDetail}
          </div>
        );
      }
    }
    return <div>{renderEcoExpendList}</div>;
  };
  if (data.ecodata === "eco") {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forwardArrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">์นํ๊ฒฝ ์ง์ถ ์นดํ๊ณ ๋ฆฌ</h1>
        </div>
        <div className="detailType">
          {data.emoji} {data.exType}
          <p>{data.count}</p>
          <h1>์ด ์ง์ถ ๊ธ์ก ์</h1>
        </div>
        <div className="line-box"></div>

        {renderEcoExpendList(data.ecodata)}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forwardArrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">๋ฐํ๊ฒฝ ์ง์ถ ์นดํ๊ณ ๋ฆฌ</h1>
        </div>
        <div className="detailType">
          {data.emoji} {data.exType}
          <p>{data.count}</p>
          <h1>์ด ์ง์ถ ๊ธ์ก ์</h1>
        </div>
        <div className="line-box"></div>
        {renderEcoExpendList(data.ecodata)}
      </div>
    );
  }
}

export default ExpendDetail;
