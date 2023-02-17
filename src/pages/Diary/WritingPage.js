import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import DiaryStyle from "./diary.module.css";
import HistorySample from "../../components/History/HistoryBack";
import Uploader from "../../components/InquiryPart/Uploader";
import Popup from "../../components/InquiryPart/Popup";
import CategoryList from "../../components/DiaryPart/CategoryList";
import { Modal } from "../../components/DiaryPart/DiaryModal";
import { BsChevronDown } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { Button } from "antd";

const WritingPage = ({ onCreate }) => {
  //카테고리 모달
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isopenModal = () => setIsModalOpen(true);
  const iscloseModal = () => setIsModalOpen(false);

  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const titleInput = useRef();
  const contentTextarea = useRef();

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    fetchPostFunc();

    console.log(state);
    onCreate(state.title, state.content);

    setState({
      title: "",
      content: "",
    });

    navigate("/Diary");
  };

  const navigate = useNavigate();

  //팝업 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //별별톡 화면으로 돌아가기
  const goDiary = () => {
    navigate("/Diary");
  };

  const userId = window.localStorage.getItem("userId");
  const fetchPostFunc = () => {
    console.log("post 시도 확인");
    //백으로 데이터 보내기
    fetch(`https://플랜잇.웹.한국:8080/api/starTalk/newPost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        userId: userId,
      },
      body: JSON.stringify({
        title: state.title,
        content: state.content,
        category: "planet",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.token) {
          localStorage.setItem("wtw-token", response.token);
        }
      });
  };

  //게시글 조회 api test => success
  //게시글 정보 담아올 곳
  // const [postArr, setPostArr] = useState([]);
  // const [postCnt, setPostCnt] = useState(0);

  // const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   console.log("게시글 조회 시도");
  //   // 게시글 조회
  //   const response = await axios.get(
  //     `https://플랜잇.웹.한국:8080/api/starTalk`,
  //     {
  //       headers: { userId: userId },
  //     }
  //   )
  //   const data = await response.data;

  //   setPostArr(data.postList);
  //   //setPostCnt(data.postCount);

  //   if (data && data.length > 0) {
  //     console.log(data[0]);
  //   }
  //   setloading(false);
  // };

  // console.log(postArr[0]);

  return (
    <>
      <div className={DiaryStyle.container}>
        {/* 게시글 조회 테스트 : <p>{postArr[0]}</p> */}
        {/* <TestList test={postArr[0]} /> */}

        <div onClick={goDiary} className={DiaryStyle.backBtn}>
          <MdClose className={DiaryStyle.closeBtn} />
        </div>

        <div className={DiaryStyle.title}>글 쓰기</div>

        <div className={DiaryStyle.title_icon}>
          <button
            className={DiaryStyle.post_btn}
            onClick={openModal}
            disabled={state.content.length !== 0 ? false : true}
          >
            <AiOutlineCheck />
          </button>
          <Popup open={modalOpen} close={closeModal} submit={handleSubmit}>
            문의를 등록하시겠습니까?
          </Popup>
        </div>

        <div className={DiaryStyle.inquiry}>
          <div className={DiaryStyle.time_info_box}>
            <textarea
              ref={contentTextarea}
              type="text"
              name="content"
              value={state.content}
              placeholder="나누고 싶은 이야기가 있으신가요?"
              onChange={handleChangeState}
            />
          </div>

          <div className={DiaryStyle.category}>
            <p>🌱 데일리 에코미션 참여하기</p>

            {isModalOpen && (
              <Modal
                onClose={iscloseModal}
                maskClosable={true}
                visible={false}
                closable={true}
                background={"#202632"}
                className="ModalInner"
              >
                <CategoryList></CategoryList>
              </Modal>
            )}
            <button onClick={isopenModal} className={DiaryStyle.category_btn}>
              <BsChevronDown />
            </button>
          </div>

          <div className={DiaryStyle.upload_box}>
            <h1>사진</h1>
            <Uploader />
          </div>
        </div>
      </div>
    </>
  );
};

export default WritingPage;
