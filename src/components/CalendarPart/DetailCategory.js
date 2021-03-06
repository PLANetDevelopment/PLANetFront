import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import { DetailItem } from "./DetailList";
import SwipeableList from "../Swipeable/SwipeableList";
import { StyledDetailPageBlock } from "./StyledDetail";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../Footer/Footer";

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

function DetailCategory() {
  const history = useNavigate();
  const data = useLocation().state;
  const [detailMoney, setDetailMoney] = useState({ income: 0, expend: 0 });
  const [detailList, setDetailList] = useState([]);

  const isEco = (ecoCnt) => (ecoCnt > 0 ? "eco" : ecoCnt < 0 ? "neco" : "etc");

  const onSwipe = (index) => {
    setTimeout(() => {
      setDetailList(detailList.filter((item) => item.id !== parseInt(index)));
      detailList.find((x) => {
        if (x.id === parseInt(index)) {
          fetchData(x.id, x.income);
        }
      });
    }, 2000);
  };
  console.log(detailMoney);
  useEffect(() => {
    if (data.typeDetail !== undefined || data.typeDetail !== null) {
      setDetailList(data.typeDetail);
      if (detailMoney.income === 0 && detailMoney.expend === 0) {
        let incomeTmp = 0;
        let expendTmp = 0;
        data.typeDetail.value.map((data) => {
          console.log(detailMoney);
          if (data.income) incomeTmp += data.cost;
          else expendTmp += data.cost;
          console.log(incomeTmp);
        });
        setDetailMoney({ income: incomeTmp, expend: expendTmp });
      }
    }
  }, [data]);

  const fetchData = async (index, income) => {
    const api = income ? "income" : "expenditure";
    const response = await fetch(`/${api}/${index}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  console.log(data);

  return (
    <>
      <StyledDetailPageBlock>
        <div className="detail-page">
          <div className="detail-info-block">
            <div className="selected-date">
              {format(data.date, "M. d EEEEE", { locale: ko })}
            </div>
            <div className="detail-info">
              <IoIosArrowForward
                className="forward-arrow"
                onClick={() => {
                  history(-1);
                }}
              />
              <div className="detail-type">
                {emoji[data.typeName]}
                &nbsp;
                {data.typeName}
              </div>
            </div>
            <div className="detail-cost">
              <div className="detail-info">
                <div className="detail-cost-label">μμ</div>
                <div
                  className={`detail-cost-value ${
                    detailMoney.income === 0 ? "none" : ""
                  }`}
                >
                  {detailMoney.income !== 0
                    ? detailMoney.income.toLocaleString()
                    : "λ΄μ­ μμ"}
                  μ
                </div>
              </div>
              <div className="detail-info">
                <div className="detail-cost-label">μ§μΆ</div>
                <div
                  className={`detail-cost-value ${
                    detailMoney.expend === 0 ? "none" : ""
                  }`}
                >
                  {detailMoney.expend !== 0
                    ? detailMoney.expend.toLocaleString()
                    : "λ΄μ­ μμ"}
                  μ
                </div>
              </div>
            </div>
          </div>

          <div className="detail-div-list">
            <div className="detail-history">λ΄μ­</div>
            {detailList.length !== 0 &&
              detailList.value.map((item) => {
                let ecoCnt = 0;
                item.ecoList !== undefined &&
                  item.ecoList.forEach((item) => {
                    if (item.eco === "G") {
                      ecoCnt += 1;
                    } else if (item.eco === "R") {
                      ecoCnt -= 1;
                    }
                  });
                return (
                  //onClick-Link to μΆκ°ν  κ²
                  <Link
                    className="detail-link"
                    to={`/statisticsModify`}
                    style={{ textDecoration: "none", color: "white" }}
                    state={{
                      item: item,
                      date: data.date,
                    }}
                  >
                    <SwipeableList key={item.id} onSwipe={onSwipe}>
                      <div className="details" key={item.id}>
                        <div
                          className={`details-circle ${isEco(ecoCnt)} ${
                            item.income ? "none" : ""
                          }`}
                        >
                          β &nbsp;
                        </div>
                        <DetailItem item={item} ecoCnt={ecoCnt} />
                      </div>
                    </SwipeableList>
                  </Link>
                );
              })}
          </div>
        </div>
      </StyledDetailPageBlock>
      <Footer activeMenu="calendar" />
    </>
  );
}

export default DetailCategory;
