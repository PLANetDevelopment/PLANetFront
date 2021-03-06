import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { format, parseISO } from "date-fns";
import "./Statistics.css";
import DateHeader from "../../components/DateHeader";
import ko from "date-fns/locale/ko";
import HistorySample from "../../components/History/HistoryBack";
import { StyledDetailBlock } from "../../components/CalendarPart/StyledDetail";
import { StyledDetailPageBlock } from "../../components/CalendarPart/StyledDetail";
const isEco = (ecoCnt) => (ecoCnt > 0 ? "eco" : ecoCnt < 0 ? "neco" : "etc");
const isEcoT = (eco) => (eco === "G" ? "eco" : eco === "R" ? "neco" : "etc");



export function DetailMemo({ item, ecoCnt }) {
  console.log(ecoCnt)
  return (
    <>
      <div
        className="stat-detail-type"
        onClick={(e) => console.log(e.target.value)}
        key={item.id}
      >
        {item.memo !== null ? item.memo : item.type}
        {item.ecoList !== undefined &&
          item.ecoList !== null &&
          item.ecoList.map((data) => {
            return (
              <div className={`details-detail ${isEcoT(data.eco)}`}>
                {data.ecoDetail === "κΈ°ν" ? <div style={{ color: "#939393" }}> {data.etcMemo} </div> :
                  (data.eco === "G" ? <div style={{ color: "#00C982" }}> {data.ecoDetail} </div>
                    : <div style={{ color: "#566479" }}> {data.ecoDetail} </div>)}
              </div>
            );
          })}
      </div>

      {ecoCnt > 0 ?
        <div className={`stat-detail-money ${isEco(ecoCnt)}`} style={{ color: "#00C982" }}>
          {item.income ? "+" : "-"}
          {item.cost.toLocaleString("ko-KR")}μ
        </div> :
        (
          ecoCnt < 0 ?
            <div className={`stat-detail-money ${isEco(ecoCnt)}`} style={{ color: "#566479" }}>
              {item.income ? "+" : "-"}
              {item.cost.toLocaleString("ko-KR")}μ
            </div> :
            <div className={`stat-detail-money ${isEco(ecoCnt)}`} style={{ color: "#939393" }}>
              {item.income ? "+" : "-"}
              {item.cost.toLocaleString("ko-KR")}μ
            </div>
        )
      }

    </>
  );
}
function StatisticsWays() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { way, year, month } = useParams();
  const income = way === "income" ? true : false;
  const nowMFormat = "M";
  const [message, setMessage] = useState(0);
  const [detailDtoList, setDetailDtoList] = useState([]);
  const [message2, setMessage2] = useState(0);
  const [detailDtoList2, setDetailDtoList2] = useState([]);
  const wayEmoji = (way) => (way === "μν" ? "π¦" : (way === "μΉ΄λ" ? "π³" : "π΅"));

  const selectWay = useLocation().state;
  const fetchData = async () => {
    const response = await fetch(
      `/statistics/${way}/${format(currentMonth, "yyyy")}/${format(
        currentMonth,
        "M"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetailDtoList(tempData.detailDtoList);
        setDetailDtoList2(tempData2.detailDtoList);
      })
      .catch((error) => {
        console.log("error!");
        console.log(error);
      });
    const data = await response.json();
    setMessage(data);
    setDetailDtoList(data.detailDtoList);
  };
  useEffect(() => {
    if (year !== null || month !== null)
      setCurrentMonth(new Date(year, month - 1, 1));
    // fetchData();
    setMessage(tempData);
    setDetailDtoList(tempData.detailDtoList);
    setMessage2(tempData2);
    setDetailDtoList2(tempData2.detailDtoList);
  }, [year, month]);

  console.log(detailDtoList);
  // console.log(detailDtoList[0].detailDtoList[2].ecoList);


  if (selectWay.name === "income") {
    return (
      <div className="static-detail-container">
        <DateHeader
          goBack={true}
          getDate={currentMonth}
          sendDate={(date) => setCurrentMonth(date)}
        />
        <div className="detail-box">
          <div className="income-detail-box">
            <p>
              {format(currentMonth, nowMFormat)}μ {income ? "μμ" : "μ§μΆ"} μ΄μ‘
            </p>
            <h1>{message.totalMonthIncome}μ</h1>
          </div>
          <div className="balloon3">
            <p>μ§λλ¬ μ΄λ§λλ³΄λ€</p>
            <h1>
              μ½ <b style={{ color: "#00C982" }}>{message.inDif}μ{" "}
                {message.inMore ? "λ " : "λ"}</b>λ€μ΄μμ΄μ
            </h1>
          </div>
        </div>

        <div className="line-box" />

        <div className="statistics-box">
          {detailDtoList.map((data) => {
            return (
              <>
                <p className="statistic-detail-list date">
                  {format(parseISO(data.date), "dμΌ EEEE", { locale: ko })}
                </p>
                {data.detailDtoList.map((value) => {
                  return (
                    <Link
                      className="detail-link"
                      to={`/statisticsModify`}
                      style={{ textDecoration: "none" }}
                      state={{
                        item: value,
                        date: parseISO(data.date),
                      }}
                    >
                      <div key={value.id} className="statistic-detail-list">
                        <span
                          role="img"
                          aria-label="something"
                          className="stat-detail-icon"
                        >
                          {wayEmoji(value.way)}
                        </span>
                        <p className="stat-detail-type">
                          {value.memo === null ? value.type : value.memo}
                        </p>
                        <p className="stat-detail-money">
                          {value.income ? "+" : "-"}
                          {value.cost.toLocaleString()}μ
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="static-detail-container">
        <DateHeader
          goBack={true}
          getDate={currentMonth}
          sendDate={(date) => setCurrentMonth(date)}
        />
        <div className="detail-box">
          <div className="income-detail-box">
            <p>
              {format(currentMonth, nowMFormat)}μ {income ? "μμ" : "μ§μΆ"} μ΄μ‘
            </p>
            <h1>{message2.totalMonthExpenditure}μ</h1>
          </div>
          <div className="balloon2">
            <p>μ§λλ¬ μ΄λ§λλ³΄λ€</p>
            <h1>
              μ½ <b style={{ color: "#00C982" }}>{message2.exDif}μ{" "}
                {message2.exMore ? "λ " : "λ"}</b>μΌμ΄μ
            </h1>
            <div className="green-Box">
              <p>μΉνκ²½ μ§μΆμ μ½ <b style={{ color: "#FFFFFF" }}>30λ§μ λ</b> μΌμ΄μ</p>
              <p>λ°νκ²½ μ§μΆμ μ½ <b style={{ color: "#FFFFFF" }}>30λ§μ λ</b> μΌμ΄μ</p>
            </div>
          </div>
        </div>

        <div className="line-box" />

        <div className="statistics-box">
          {detailDtoList2.map((data) => {
            return (
              <>
                <p className="statistic-detail-list date">
                  {format(parseISO(data.date), "dμΌ EEEE", { locale: ko })}
                </p>
                {data.detailDtoList.map((value) => {
                  let ecoCnt = 0;
                  value.ecoList !== null &&
                    value.ecoList.forEach((value) => {
                      if (value.eco === "G") {
                        ecoCnt += 1;
                      } else if (value.eco === "R") {
                        ecoCnt -= 1;
                      }
                    });
                  return (
                    <Link
                      className="detail-link"
                      to={`/statisticsModify`}
                      style={{ textDecoration: "none" }}
                      state={{
                        item: value,
                        date: parseISO(data.date),
                      }}
                    >
                      <StyledDetailPageBlock>
                        <div className="statistic-detail-list" key={value.id}>
                          <div className="stat-detail-icon">
                            {wayEmoji(value.way)}
                          </div>
                          <DetailMemo item={value} ecoCnt={ecoCnt} />
                        </div>
                      </StyledDetailPageBlock>
                    </Link>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

StatisticsWays.defaultProps = {
  income: true,
};
const tempData = {
  "totalMonthIncome": 884,
  "totalMonthExpenditure": 92000,
  "inMore": true,
  "exMore": true,
  "inDif": 880,
  "exDif": 92000,
  "detailDtoList": [
    {
      date: "2022-04-26",
      detailDtoList: [
        {
          id: 1,
          way: "νκΈ",
          type: "κ²½μ‘°μ¬/νλΉ",
          cost: 92503,
          memo: "μ¬κΈ°λ μμμ΄κ΅¬μ",
          ecoList: null,
          income: true,
        },
        {
          id: 2,
          way: "μν",
          type: "μκΈ",
          cost: 1726000,
          memo: null,
          ecoList: null,
          income: true,
        },
        {
          id: 13,
          way: "μΉ΄λ",
          type: "μνν",
          cost: 4990,
          memo: "λΉλ",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "μΉνκ²½ μ ν κ΅¬λ§€",
              etcMemo: null,
            },
            {
              eco: "N",
              ecoDetail: "κΈ°ν",
              etcMemo: "νμ μ°λ λ¬Όκ±΄ μμ΄λ²λ €μ μ¬κ΅¬λ§€",
            },
            {
              eco: "G",
              ecoDetail: "λΉκ±΄μλΉ λ°©λ¬Έ",
              etcMemo: null,
            },
          ],
          income: true,
        },
        {
          id: 14,
          way: "μΉ΄λ",
          type: "κ°μ ",
          cost: 50000,
          memo: "κ°μ€λ μΈμ§",
          ecoList: null,
          income: true,
        },
      ],
    },
    {
      date: "2022-04-27",
      detailDtoList: [
        {
          id: 15,
          way: "μν",
          type: "μνν",
          cost: 92503,
          memo: "νλΈλ¬",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "μΉνκ²½ μ ν κ΅¬λ§€",
              etcMemo: null,
            },
            {
              eco: "N",
              ecoDetail: "κΈ°ν",
              etcMemo: "νμ μ°λ λ¬Όκ±΄ μμ΄λ²λ €μ μ¬κ΅¬λ§€",
            },
          ],
          income: true,
        },
        {
          id: 16,
          way: "μΉ΄λ",
          type: "μλΉ",
          cost: 92503,
          memo: "νμ",
          ecoList: null,
          income: true,
        },
      ],
    },
  ]
};

const tempData2 = {
  "totalMonthIncome": 880,
  "totalMonthExpenditure": 92001,
  "inMore": true,
  "exMore": true,
  "inDif": 880,
  "exDif": 92003,
  "detailDtoList": [
    {
      date: "2022-04-26",
      detailDtoList: [
        {
          id: 1,
          way: "νκΈ",
          type: "κ²½μ‘°μ¬/νλΉ",
          cost: 92503,
          memo: "μ§μΆμλλ",
          ecoList: null,
          income: false,
        },
        {
          id: 2,
          way: "μν",
          type: "μκΈ",
          cost: 1726000,
          memo: null,
          ecoList: null,
          income: false,
        },
        {
          id: 13,
          way: "μΉ΄λ",
          type: "μνν",
          cost: 4990,
          memo: "λΉλ",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "μΉνκ²½ μ ν κ΅¬λ§€",
              etcMemo: null,
            },
            {
              eco: "N",
              ecoDetail: "κΈ°ν",
              etcMemo: "νμ μ°λ λ¬Όκ±΄ μμ΄λ²λ €μ μ¬κ΅¬λ§€",
            },
            {
              eco: "R",
              ecoDetail: "λΉκ±΄μλΉ λ°©λ¬Έ",
              etcMemo: null,
            },
          ],
          income: false,
        },
        {
          id: 14,
          way: "μΉ΄λ",
          type: "κ°μ ",
          cost: 50000,
          memo: "κ°μ€λ μΈμ§",
          ecoList: null,
          income: false,
        },
      ],
    },
    {
      date: "2022-04-27",
      detailDtoList: [
        {
          id: 15,
          way: "μν",
          type: "μνν",
          cost: 92503,
          memo: "νλΈλ¬",
          ecoList: [
            {
              eco: "G",
              ecoDetail: "μΉνκ²½ μ ν κ΅¬λ§€",
              etcMemo: null,
            },
            {
              eco: "N",
              ecoDetail: "κΈ°ν",
              etcMemo: "νμ μ°λ λ¬Όκ±΄ μμ΄λ²λ €μ μ¬κ΅¬λ§€",
            },
          ],
          income: false,
        },
        {
          id: 16,
          way: "μΉ΄λ",
          type: "μλΉ",
          cost: 92503,
          memo: "νμ",
          ecoList: null,
          income: false,
        },
      ],
    },
  ]
};

//const id = " user1@naver.com";

// const fetchData = () => {
//   fetch(
//     `/statistics/${way}/${id}/${format(currentMonth, "yyyy")}/${format(
//       currentMonth,
//       "M"
//     )}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     }
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       setDetailList(data.detailDtoList);
//     })
//     .catch((error) => {
//       console.log("error!");
//       console.log(error);
//     });
// };

export default StatisticsWays;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { format, parseISO } from "date-fns";
// import "./Statistics.css";
// import DateHeader from "../../components/DateHeader";
// import ko from "date-fns/locale/ko";
// import HistorySample from "../../components/History/HistoryBack";

// function StatisticsWays() {
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const { way, year, month } = useParams();
//   const income = way === "income" ? true : false;
//   const nowMFormat = "M";
//   const [detailList, setDetailList] = useState(tempData);
//   const wayEmoji = (way) => (way === "μν" ? "π¦" : "μΉ΄λ" ? "π³" : "π°");

//   useEffect(() => {
//     if (year !== null || month !== null)
//       setCurrentMonth(new Date(year, month - 1, 1));
//   }, [year, month]);

//   return (
//     <div className="static-detail-container">
//       <DateHeader
//         goBack={true}
//         getDate={currentMonth}
//         sendDate={(date) => setCurrentMonth(date)}
//       />
//       <div className="detail-box">
//         <div className="income-detail-box">
//           <p>
//             {format(currentMonth, nowMFormat)}μ {income ? "μμ" : "μ§μΆ"} μ΄μ‘
//           </p>
//           <h1>800,000μ</h1>
//         </div>
//         <div className="balloon2">
//           <p>μ§λλ¬ μ΄λ§λλ³΄λ€</p>
//           <h1>
//             μ½ <b style={{ color: "#00C982" }}>10λ§μ λ</b>{" "}
//             {income ? "λ€μ΄μ" : "μΌ"}μ΄μ
//           </h1>
//         </div>
//       </div>

//       <div className="line-box" />

//       <div className="statistics-box">
//         {detailList.map((data) => {
//           return (
//             <>
//               <p className="statistic-detail-list date">
//                 {format(parseISO(data.date), "dμΌ EEEE", { locale: ko })}
//               </p>
//               {data.detailDtoList.map((value) => {
//                 return (
//                   <div key={value.id} className="statistic-detail-list">
//                     <span
//                       role="img"
//                       aria-label="something"
//                       className="stat-detail-icon"
//                     >
//                       {wayEmoji(value.way)}
//                     </span>
//                     <p className="stat-detail-type">
//                       {value.memo === null ? value.type : value.memo}
//                     </p>
//                     <p className="stat-detail-money">
//                       {value.income ? "+" : "-"}
//                       {value.cost.toLocaleString()}μ
//                     </p>
//                   </div>
//                 );
//               })}
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// StatisticsWays.defaultProps = {
//   income: true,
// };
// const tempData = [
//   {
//     date: "2022-04-26",
//     detailDtoList: [
//       {
//         id: 1,
//         way: "νκΈ",
//         type: "κ²½μ‘°μ¬/νλΉ",
//         cost: 92503,
//         memo: "income memo",
//         ecoList: null,
//         income: true,
//       },
//       {
//         id: 2,
//         way: "μν",
//         type: "μκΈ",
//         cost: 1726000,
//         memo: null,
//         ecoList: null,
//         income: true,
//       },
//       {
//         id: 13,
//         way: "μΉ΄λ",
//         type: "μνν",
//         cost: 4990,
//         memo: "λΉλ",
//         ecoList: [
//           {
//             eco: "G",
//             ecoDetail: "μΉνκ²½ μ ν κ΅¬λ§€",
//             etcMemo: null,
//           },
//           {
//             eco: "N",
//             ecoDetail: "κΈ°ν",
//             etcMemo: "νμ μ°λ λ¬Όκ±΄ μμ΄λ²λ €μ μ¬κ΅¬λ§€",
//           },
//           {
//             eco: "G",
//             ecoDetail: "λΉκ±΄μλΉ λ°©λ¬Έ",
//             etcMemo: null,
//           },
//         ],
//         income: false,
//       },
//       {
//         id: 14,
//         way: "μΉ΄λ",
//         type: "κ°μ ",
//         cost: 50000,
//         memo: "κ°μ€λ μΈμ§",
//         ecoList: null,
//         income: false,
//       },
//     ],
//   },
//   {
//     date: "2022-04-27",
//     detailDtoList: [
//       {
//         id: 15,
//         way: "μν",
//         type: "μνν",
//         cost: 92503,
//         memo: "νλΈλ¬",
//         ecoList: [
//           {
//             eco: "G",
//             ecoDetail: "μΉνκ²½ μ ν κ΅¬λ§€",
//             etcMemo: null,
//           },
//           {
//             eco: "N",
//             ecoDetail: "κΈ°ν",
//             etcMemo: "νμ μ°λ λ¬Όκ±΄ μμ΄λ²λ €μ μ¬κ΅¬λ§€",
//           },
//         ],
//         income: false,
//       },
//       {
//         id: 16,
//         way: "μΉ΄λ",
//         type: "μλΉ",
//         cost: 92503,
//         memo: "νμ",
//         ecoList: null,
//         income: false,
//       },
//     ],
//   },
// ];
//const id = " user1@naver.com";

// const fetchData = () => {
//   fetch(
//     `/statistics/${way}/${id}/${format(currentMonth, "yyyy")}/${format(
//       currentMonth,
//       "M"
//     )}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     }
//   )
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       setDetailList(data.detailDtoList);
//     })
//     .catch((error) => {
//       console.log("error!");
//       console.log(error);
//     });
// };

//export default StatisticsWays;