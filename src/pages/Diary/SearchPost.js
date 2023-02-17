import React, { useState, useEffect } from "react";

import DiaryStyle from "./diary.module.css";
import HistorySample from "../../components/History/HistoryBack";

import SearchBar from "../../components/DiaryPart/SearchBar";
import SearchHistory from "../../components/DiaryPart/SearchHistory";

function SearchPost() {
  const [search, setSearch] = useState(""); //검색창 변화 감지

  const onChange = (e) => {
    //value값 변경
    setSearch(e.target.value);
  };

  //검색어 기능 설정
  //string은 map을 사용 할 수 없기때문에 object 형태로 변환 시키기 위해 parsing을 해줘야함
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem("keywords") || "[]")
  );

  //keyword에 변화가 일어날때만 랜더링
  useEffect(() => {
    //array 타입을 string형태로 바꾸기 위해 json.stringfy를 사용한다.
    localStorage.setItem("keywords", JSON.stringify(keywords));
  }, [keywords]);

  //검색어 추가
  const handleAddKeyword = (text) => {
    console.log("text", text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  //검색어 삭제
  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      return thisKeyword.id != id;
    });
    setKeywords(nextKeyword);
  };

  //검색어 전체 삭제
  const handleClearKeywords = () => {
    setKeywords([]);
  };

  return (
    <>
      <div className={DiaryStyle.container}>
        <div>
          <div className={DiaryStyle.searchBackBtn}>
            <HistorySample />
          </div>
          <div>
            <SearchBar onAddKeyword={handleAddKeyword}></SearchBar>
            <SearchHistory
              keywords={keywords}
              onClearKeywords={handleClearKeywords}
              onRemoveKeyword={handleRemoveKeyword}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPost;
