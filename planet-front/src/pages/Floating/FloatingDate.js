import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import IncomeDate from '../../components/FloatingPart/IncomeDate';
import BottomBtn from '../../components/FloatingPart/BottomBtn';

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
      <h1><IncomeDate></IncomeDate></h1>

      <BottomBtn></BottomBtn>

    </div>
  );
}

export default FloatingDate;
