import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import SearchBar from "../../components/DiaryPart/SearchBar";
import WritingPage from "./WritingPage";
import WritingList from "../../components/DiaryPart/WritingList";
import Footer from "../../components/Footer/Footer";
import DiaryStyle from "./diary.module.css";
import { ReactComponent as Pencil } from "../../components/svg/pencil.svg";
import { FiSearch } from "react-icons/fi";

const MAIN_DATA = [
  {
    id: "1",
    text: "전체글",
    name: "first",
  },
  {
    id: "2",
    text: "인기글",
    name: "second",
  },
  {
    id: "3",
    text: "환경 소식",
    name: "third",
  },
  {
    id: "4",
    text: "스크랩",
    name: "fourth",
  },
];

const Diary = () => {
  const navigate = useNavigate();

  const moveEcoMission = () => {
    navigate("/ecoMission");
  };

  const clickSearchBar = () => {
    navigate("/searchPost");
  };

  /*버튼마다 컴포넌트 변경하기*/
  const [content, setContent] = useState("1");

  const btnValueSetting = (e) => {
    setContent(e.target.value);
  };

  //게시글 data 받아오기
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false);

  const dataId = useRef(0);

  const onCreate = (title, content) => {
    const created_date = new Date().getTime();

    console.log(created_date);

    const newItem = {
      title,
      content,
      created_date,
      id: dataId.current,
    };

    dataId.current += 1;

    setData([newItem, ...data]);
    setForm(false);
  };

  //에코챌린지
  const userId = window.localStorage.getItem("userId");
  // const isFocused = useIsFocused();
  const [loading, setloading] = useState(true);

  const [comments, setComments] = useState([]);

  //필요할 때만 가져오기 (배열 안에 comments 넣으면 무한루프..)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Trying to get 에코미션 info!!");

    const response = await axios.get(
      `https://플랜잇.웹.한국:8080/api/starTalk/ecoMission`,
      {
        headers: { userId: userId },
      }
    );
    const data = await response.data;

    setComments(data);

    if (data && data.length > 0) {
      console.log(data[0]);
    }

    console.log(data);

    setloading(false);
  };

  //카테고리별 게시글 가져오기 api 테스트 => success
  // const userId = window.localStorage.getItem("userId");
  // const [loading, setloading] = useState(true);

  // const [categoryPostArr, setCategoryPostArr] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   console.log("Trying to get category post info");

  //   const response = await axios.get(
  //     `https://플랜잇.웹.한국:8080/api/starTalk/myPost`,
  //     {
  //       headers: { userId: userId },
  //     }
  //   );
  //   const data = await response.data;

  //   setCategoryPostArr(data);

  //   if (data && data.length > 0) {
  //     console.log(data[0]);
  //   }

  //   setloading(false);
  // };

  // console.log(categoryPostArr);

  return (
    <>
      <div className={DiaryStyle.container}>
        {!form && (
          <>
            <div>
              {/* Todo : click 범위 제대로 설정하기 */}
              <div onClick={clickSearchBar}>
                <div className={DiaryStyle.search_container}>
                  <div className={DiaryStyle.search_inputContainer}>
                    <FiSearch className={DiaryStyle.search_icon} />
                    <div className={DiaryStyle.search_inputBox}>
                      <input placeholder="#에코 미션 챌린지" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={DiaryStyle.drop_box}>
              {MAIN_DATA.map((data) => {
                return (
                  <button
                    className={`${
                      data.id === content
                        ? DiaryStyle.drop_box_selected
                        : DiaryStyle.drop_box_dimm
                    }`}
                    onClick={btnValueSetting}
                    value={data.id}
                    name={data.name}
                    key={data.id}
                  >
                    {data.text}
                  </button>
                );
              })}
            </div>

            <div className={DiaryStyle.border_line}></div>

            {/* 배너 */}
            <div className={DiaryStyle.banner_container}>
              <div className={DiaryStyle.banner_content}>
                <p>일상 속에서 쌓는 환경 경험치!</p>
                <h1>에코 미션 챌린지</h1>

                <button onClick={moveEcoMission}>나도 참여하기</button>
              </div>
              <div className={DiaryStyle.banner_img_box}>
                <img
                  className={DiaryStyle.banner_img}
                  src="img/banner.png"
                  alt="banner"
                />
              </div>
            </div>

            <div className={DiaryStyle.post_container}>
              {data.length === 0 ? (
                <h1>아직 등록된 글이 없어요</h1>
              ) : (
                <WritingList writingList={data} />
              )}
            </div>

            <div className={DiaryStyle.writing} onClick={() => setForm(true)}>
              <Pencil className={DiaryStyle.pencil} />
            </div>

            <Footer activeMenu="diary">
              <div>별별톡</div>
            </Footer>
          </>
        )}

        {form && <WritingPage onCreate={onCreate} />}
      </div>
    </>
  );
};

export default Diary;
