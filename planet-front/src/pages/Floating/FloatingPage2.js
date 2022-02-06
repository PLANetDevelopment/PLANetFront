import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';

//Content
class Content extends Component {
  render(){
    return(
      <article>
        <p>{this.props.title}</p>
        <h1>{this.props.desc}</h1>
      </article>
    );
  }
}

function FloatingPage2() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>
      <Dashboard2></Dashboard2>

      <Content title="언제 쓰셨나요?" desc="22.01.24"></Content>
      <Content title="얼마 쓰셨나요?" desc="0원"></Content>

    </div>
  );
}

export default FloatingPage2;
