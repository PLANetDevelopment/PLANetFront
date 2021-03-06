import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EcoExpend.css";

const EcoExpendColor = ["#00C982", "#1466FE", "#083FA5", "#728EC6"];
const NEcoExpendColor = ["#8593B1", "#667492", "#475572", "#303B51"];

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

function EcoExpend(props) {
  const [message, setMessage] = useState([]);
  const [loading, setloading] = useState(true);
  const [ecoTagCounts, setEcoTagCounts] = useState([]);
  const [noEcoTagCounts, setNoEcoTagCounts] = useState([]);
  useEffect(() => {
    // fetchData();
    setMessage(data);
    setEcoTagCounts(data.ecoTagCounts);
    setNoEcoTagCounts(data.noEcoTagCounts);
    setloading(false);
  }, []);

  console.log(ecoTagCounts);
  const renderExpendList = (props, message) => {
    let renderExpendList = [];

    if (message.length !== 0) {
      if (props.name === "eco") {
        for (let i = 0; i < ecoTagCounts.length - 1 && i < 4; i++) {
          renderExpendList.push(
            <div>
              <div
                className="day-breakdown-box-icon"
                style={{ color: EcoExpendColor[i] }}
              >
                β {"  "}
                {emoji[ecoTagCounts[i][0]]}
              </div>
              <h1>{ecoTagCounts[i][0]}</h1>
              <h2>{ecoTagCounts[i][1]}κ°</h2>
              <p></p>
            </div>
          );
        }
      } else {
        for (let i = 0; i < noEcoTagCounts.length - 1 && i < 4; i++) {
          renderExpendList.push(
            <div>
              <div
                className="day-breakdown-box-icon"
                style={{ color: NEcoExpendColor[i] }}
              >
                β {emoji[noEcoTagCounts[i][0]]}
              </div>
              <h1>{noEcoTagCounts[i][0]}</h1>
              <h2>{noEcoTagCounts[i][1]}κ°</h2>
              <p></p>
            </div>
          );
        }
      }
    }

    return <div>{renderExpendList}</div>;
  };

  const fetchData = async () => {
    const response = await fetch(
      `/statistics/2022/3`,
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
    setMessage(data);
    setEcoTagCounts(data.ecoTagCounts);
    setNoEcoTagCounts(data.noEcoTagCounts);
    setloading(false);
  };

  console.log(message);
  if (props.name === "eco") {
    return (
      <div className="statistics-box">
        <div className="day-box">
          <div className="day-breakdown-box">
            <p>
              μ§μΆ μΉ΄νκ³ λ¦¬ <span>νκ·Έκ°μ</span>
            </p>
            {renderExpendList(props, message)}
            <Link
              to="/EcoCategory"
              state={{
                name: "eco",
              }}
            >
              <div className="more">
                <h1 style={{ color: "#C7D2E8" }}>β</h1>
                <h1>λλ³΄κΈ°</h1>
                {/* <h2>{ecoTagCounts[2][1]}κ°</h2> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="statistics-box">
        <div className="day-box">
          <div className="day-breakdown-box">
            <p>
              μ§μΆ μΉ΄νκ³ λ¦¬ <span>νκ·Έκ°μ</span>
            </p>
            {renderExpendList(props, message)}
            <Link
              to="/EcoCategory"
              state={{
                name: "neco",
              }}
            >
              <div className="more">
                <h1 style={{ color: "#C7D2E8" }}>β</h1>
                <h1>λλ³΄κΈ°</h1>
                {/* <h2>{noEcoTagCounts[2][1]}κ°</h2> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EcoExpend;

const data = {
  userName: "μ¬μ©μ1",
  incomeTotal: 102000,
  expenditureTotal: 549000,
  ecoDifference: 6,
  noEcoDifference: 3,
  ecoCount: { 3: 6, 4: 12 },
  nowEcoCount: 12,
  nowNoneEcoCount: 4,
  percentage: 67.0,
  ecoTagCounts: [
    ["λ§νΈ", 6],
    ["κΈμ¬", 2],
    ["κΈ°ν", 2],
    ["μνν", 2],
    ["λλ³΄κΈ°", 0],
    ["λλ³΄κΈ°", 0],
  ],
  noEcoTagCounts: [
    ["μλΉ", 3],
    ["κΈ°ν", 1],
    ["μνν", 1],
    ["κΈμ¬", 1],
    ["λλ³΄κΈ°", 0],
  ],
};
