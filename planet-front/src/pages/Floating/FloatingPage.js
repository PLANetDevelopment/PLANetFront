import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import { Link } from 'react-router-dom';
import TopNav from '../../components/FloatingPart/TopNav';
import Dashboard from '../../components/FloatingPart/Dashboard';
import IncomeDate from '../../components/FloatingPart/IncomeDate';

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

function FloatingPage() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>
      <Dashboard></Dashboard>

      <Content title="언제 받으셨나요?"></Content>

      <Link to="/FloatingDate">
        <h1><IncomeDate></IncomeDate></h1>
      </Link>


      <Content title="얼마 받으셨나요?" desc="0원"></Content>

    </div>
  );
}

export default FloatingPage;
