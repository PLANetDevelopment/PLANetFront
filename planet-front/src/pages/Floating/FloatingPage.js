import React, { Component } from 'react';
import IncomeStyle from './Float.module.css';

//뒤로 버튼
class BackBtn extends Component {
  render() {
    return(
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
      </div>
    );
  }
}

//수입 상단바 
class TopNav extends Component {
  render(){
    return(
      <nav>
        <div>button1</div>
        <div>button2</div>
        <div>button3</div>
        <div>button4</div>
      </nav>
    );
  }
}

function FloatingPage() {
  return (
    <div className={IncomeStyle.container}>
      <BackBtn></BackBtn>
      <TopNav></TopNav>
      왜 안써지냐고
    </div>
);
}

export default FloatingPage;
