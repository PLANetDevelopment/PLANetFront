import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';
import { Link } from 'react-router-dom';
import TopNav2 from '../../components/FloatingPart/TopNav2';
import Dashboard2 from '../../components/FloatingPart/Dashboard2';
import IncomeDate from '../../components/FloatingPart/IncomeDate';
import InputDateStyle from '../../components/FloatingPart/InputDate.module.css';
import FloatingDate2 from './FloatingDate2';

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

class FloatingPrice2 extends Component {
  constructor() {
    super();
    this.state = {
      price: "",
      disabled: true,
    };
  }

  handlePriceValue = (e) => {
    this.setState({ price: e.target.value });
  };

  //입력 받은 Date값 불러오기
  handleCreate = data => {
    console.log(data);
  };

  render(){
  return (
    <div className={IncomeStyle.container}>
      <TopNav2></TopNav2>
      <Dashboard2></Dashboard2>

      <Content title="언제 쓰셨나요?"></Content>

      <Link to="/FloatingDate2" style={{ textDecoration: 'none' }}>
        <h1>{this.props.value}</h1>
      </Link>

      <Content title="얼마 쓰셨나요?"></Content>
      
      <div className={InputDateStyle.inputPrice}>
      <input
        id="inputPrice"
        type="text"
        placeholder='0원'
        onChange={this.handlePriceValue}
        />
       </div>

      <div className={IncomeStyle.bottomBtn2}>
        <button className={IncomeStyle.bottomBtnDisabled}>뒤로</button>
        <button className={IncomeStyle.bottomBtnActive}
          disabled={this.state.price.length !== 0 ? false : true}>다음</button>
      </div>

    </div>
  );
}
}

export default FloatingPrice2;
