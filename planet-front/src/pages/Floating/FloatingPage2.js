import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import { Link } from 'react-router-dom';
import TopNav2 from '../../components/FloatingPart/TopNav2';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';
import IncomeDate from '../../components/FloatingPart/IncomeDate';
import InputPrice from '../../components/FloatingPart/InputPrice';

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
      <TopNav2></TopNav2>
      <Dashboard2></Dashboard2>

      <Content title="언제 쓰셨나요?"></Content>

      <Link to="/FloatingDate2" style={{ textDecoration: 'none' }}>
        <h1><IncomeDate></IncomeDate></h1>
      </Link>

      <Content title="얼마 쓰셨나요?"></Content>
      <InputPrice></InputPrice>

    </div>
  );
}

export default FloatingPage2;
