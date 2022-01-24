import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import Clock from '../../components/FloatingPart/Clock';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';

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

function FloatingPage() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>
      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?" desc="22.01.24"></Content>
      <Content title="얼마 받으셨나요?" desc="0원"></Content>

    </div>
  );
}

export default FloatingPage;
