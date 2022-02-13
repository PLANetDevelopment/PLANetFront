import React, { Component, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import InputDateStyle from '../../components/FloatingPart/InputDate.module.css';

//Content
class Content extends Component {
  render(){
    return(
      <article>
        <p>{this.props.title}</p>
        <h2>{this.props.desc}</h2>
      </article>
    );
  }
}

function FloatingDate({todoList, setTodoList, onInsert}) {
  const todayTime = () => {
    let now = new Date(); //현재 날짜 및 시간
    let todayYear = now.getFullYear();
    let todayMonth = ("0" + (now.getMonth() + 1)).slice(-2);
    let todayDate = ("0" + now.getDate()).slice(-2);

    return todayYear + '.' + todayMonth + '.' + todayDate;
  }

  const [date, setDate] = useState(todayTime().slice(2, 10));
  const [disabled, setDisabled] = useState(false);

  const onSubmit = useCallback(
    e => {
      onInsert(date);
      setDate(todayTime().slice(2, 10)); //초기화
      e.preventDefault();
    },
    [onInsert, date]
  )

  const onPressSubmitButton = (e) => {
    e.preventDefault();
    // todoItemList에 값 추가
    const nextTodoList = todoList.concat({
      date,
    });
    setTodoList(nextTodoList);

    // input 값 초기화 및 포커싱
    setDate(todayTime().slice(2, 10)); //초기화
  };

  const onChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    //제출 중복 방지
    setDisabled(true);
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    alert(`입력된 날짜 : ${date}`);
    setDisabled(false);
  };

  return (
    <div className={IncomeStyle.container_date}>
      <TopNav></TopNav>

      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?"></Content>

      <form action="/FloatingPrice" onSubmit={onPressSubmitButton} className={IncomeStyle.container_date}>
      <div className={InputDateStyle.inputData}>
            <input 
              type="text"
              name="inputD"
              value={date}
              onChange={onChange}
            />
            </div>

        <div className={IncomeStyle.bottomBtn}>
          <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
          <Link to="/FloatingPrice">
            <button type="submit" disabled={disabled} className={IncomeStyle.bottomBtnActive}>다음</button>
          </Link>
        </div>

      </form>

    </div>
  );
}

export default FloatingDate;
