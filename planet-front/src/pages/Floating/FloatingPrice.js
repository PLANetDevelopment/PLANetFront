import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import { Link } from 'react-router-dom';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import IncomeDate from '../../components/FloatingPart/IncomeDate';
import InputPrice from '../../components/FloatingPart/InputPrice';

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


//받아온 데이터 값 넣어야 함(수정 필요)
function FloatingPrice() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>
      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?"></Content>

      <Link to="/FloatingDate" style={{ textDecoration: 'none' }}>
        <h1><IncomeDate></IncomeDate></h1>
      </Link>

      <Content title="얼마 받으셨나요?"></Content>
      <InputPrice></InputPrice>

      <div className={IncomeStyle.bottomBtn2}>
        <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
        <button className={IncomeStyle.bottomBtnDisabled}>다음</button>
      </div>

    </div>
  );
}

export default FloatingPrice;
