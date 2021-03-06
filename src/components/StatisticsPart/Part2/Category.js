import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Category.css";
import { FaChevronLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { message } from "antd";

const emoji = {
  κΈμ¬: "π°",
  μ©λ: "π",
  μλΉ: "π­",
  κ΅ν΅: "π",
  λ¬Ένμν: "π¬",
  μνν: "βοΈ",
  λ§νΈ: "π",
  κ΅μ‘: "π",
  ν΅μ : "π±",
  "μλ£/κ±΄κ°": "π₯",
  "κ²½μ‘°μ¬/νλΉ": "π΅",
  κ°μ : "π",
  κ³΅κ³ΌκΈ: "π§Ύ",
  κΈ°ν: "π¬",
};

function Category() {
  const history = useNavigate();
  const [message, setMessage] = useState([]);
  const [message2, setMessage2] = useState([]);
  const [loading, setloading] = useState(true);

  const renderexTypeList = (ecodata, message) => {
    let renderexTypeList = [];

    if (message.length !== 0 || message2.length !== 0) {
      if (ecodata.name === "eco") {
        for (let i = 0; i < message.length; i++) {
          renderexTypeList.push(
            // <Link to={`/detail`}
            //   state={{
            //     exType: expendData[i].exType,
            //     emoji: expendData[i].emoji,
            //     count: expendData[i].count,
            //     ecodata: ecodata.name,
            //   }}
            // >
            <div className="category-box">
              <p className="emoji">{emoji[message[i][0]]} </p>
              <h2>
                {message[i][0]}
                {" | "}
                {message[i][1]}%
              </h2>
              <IoIosArrowForward className="detail-icon" />
              <h1 className="count">{message[i][2]}κ°</h1>
            </div>

            // </Link>
          );
        }
      } else {
        for (let i = 0; i < message.length; i++) {
          renderexTypeList.push(
            // <Link to={`/detail`}
            //   state={{
            //     exType: expendData[i].exType,
            //     emoji: expendData[i].emoji,
            //     count: expendData[i].count,
            //     ecodata: ecodata.name,
            //     memo: expendData[i].memo,
            //   }}
            // >

            <div className="category-box">
              <p className="emoji">{emoji[message2[i][0]]} </p>
              <h2>
                {message[i][0]}
                {" | "}
                {message[i][1]}%
              </h2>
              <IoIosArrowForward className="detail-icon" />
              <h1 className="count">{message[i][2]}κ°</h1>
            </div>

            // </Link>
          );
        }
      }
    }

    return <div>{renderexTypeList}</div>;
  };

  const fetchData = async () => {
    const response = await fetch(
      `/statistics/ecoCountsDetail/2022/3`,
      //${format(new Date(), "M")}
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    setMessage(data.tagList);
    setloading(false);
  };

  const fetchData2 = async () => {
    const response = await fetch(
      `/statistics/noEcoCountsDetail/2022/3`,
      //${format(new Date(), "M")}
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const data2 = await response.json();
    setMessage2(data2.tagList);
    console.log(data2);
    setloading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // fetchData();
    // fetchData2();
    setMessage(data.tagList);
    setMessage2(data2.tagList);
    setloading(false);
  }, []);

  console.log(message);
  console.log(message2);
  const ecodata = useLocation().state;

  if (loading) return <div>loading...</div>;
  if (ecodata.name === "eco") {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forwardArrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">μΉνκ²½ μ§μΆ μΉ΄νκ³ λ¦¬</h1>
          <h1 className="title">μ§μΆ μΉ΄νκ³ λ¦¬λ³ μλΉ</h1>
        </div>
        {renderexTypeList(ecodata, message)}
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="header">
          <FaChevronLeft
            className="forward-arrow"
            onClick={() => {
              history(-1);
            }}
          />
          <h1 className="cateGory">λ°νκ²½ μ§μΆ μΉ΄νκ³ λ¦¬</h1>
          <h1 className="title">μ§μΆ μΉ΄νκ³ λ¦¬λ³ μλΉ</h1>
        </div>
        {renderexTypeList(ecodata, message2)}
      </div>
    );
  }
}

export default Category;

const data = {
  tagList: [
    ["μλΉ", 50, 6],
    ["κΈ°ν", 17, 2],
    ["μνν", 17, 2],
    ["κΈμ¬", 17, 2],
  ],
};
const data2 = {
  tagList: [
    ["μλΉ", 50, 3],
    ["κΈμ¬", 17, 1],
    ["κΈ°ν", 17, 1],
    ["μνν", 17, 1],
  ],
};
