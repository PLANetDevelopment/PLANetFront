import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import InputDate from '../../components/FloatingPart/InputDate';

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

function FloatingDate() {
  return (
    <div className={IncomeStyle.container_date}>
      <TopNav></TopNav>

      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?"></Content>

      <InputDate></InputDate>

      <div className={IncomeStyle.bottomBtn}>
        <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
        <Link to="/FloatingPrice">
          <button className={IncomeStyle.bottomBtnActive}>다음</button>
        </Link>
      </div>

    </div>
  );
}

export default FloatingDate;
