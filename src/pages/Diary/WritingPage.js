import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import DiaryStyle from "./diary.module.css";
import Uploader from "../../components/InquiryPart/Uploader";
import Popup from "../../components/PopupPart/SavePopup";
import CategoryList from "../../components/DiaryPart/CategoryList";
import { Modal } from "../../components/DiaryPart/DiaryModal";
import { MdClose } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { TbKeyboardShow } from "react-icons/tb";

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
  const returnPage = (e) => {
    setModalOpen(false);

    setState({
      title: "",
      content: "",
    });

    navigate("/Diary");
  };

  //별별톡 화면으로 돌아가기
  //form 값을 다시 false로 바꿔줘야함
  //floating 버튼 생기면 페이지 위에 덮어쓰지 말고 그냥 페이지 이동으로 바꾸면 해결될 듯
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

        <div className={DiaryStyle.title_header}>
          {/* <div onClick={goDiary} className={DiaryStyle.backBtn}>
            <MdClose className={DiaryStyle.closeBtn} />
          </div>

          <div className={DiaryStyle.title_icon}>
            <button
              className={DiaryStyle.post_btn}
              onClick={openModal}
              disabled={state.content.length !== 0 ? false : true}
            >
              <AiOutlineCheck />
            </button>
            <Popup open={modalOpen} close={closeModal} submit={handleSubmit}>
              작성 중인 <br /> 글을 저장하시겠어요?
            </Popup>
          </div> */}

          <div onClick={openModal} className={DiaryStyle.backBtn}>
            <MdClose className={DiaryStyle.closeBtn} />
          </div>

          <Popup open={modalOpen} close={returnPage} submit={handleSubmit}>
            작성 중인 <br /> 글을 저장하시겠어요?
          </Popup>

          <div className={DiaryStyle.title}>글 쓰기</div>

          <div className={DiaryStyle.title_icon}>
            <button
              className={DiaryStyle.post_btn}
              disabled={state.content.length !== 0 ? false : true}
            >
              <AiOutlineCheck />
            </button>
          </div>
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
            <button onClick={isopenModal} className={DiaryStyle.category_btn}>
              🌱 데일리 에코미션 참여하기
            </button>

            <button className={DiaryStyle.info_btn}>?</button>

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

            <div className={DiaryStyle.border_line}></div>

            <div className={DiaryStyle.upload}>
              <TbKeyboardShow className={DiaryStyle.keyboard_icon} />
              <AiOutlinePicture className={DiaryStyle.pic_icon} />
              <p>(0/10)</p>
            </div>
          </div>

          {/* <div className={DiaryStyle.upload_box}>
            <h1>사진</h1>
            <Uploader />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WritingPage;
