import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IncomeStyle from './Float.module.css';
import { FaChevronLeft } from 'react-icons/fa';
import { AiOutlineMinus } from 'react-icons/ai';

//수입 상단바 
class TopNav extends Component {
  render() {
    return (
      <div className={IncomeStyle.backBtn}>
          <Link to="/#">
            <FaChevronLeft className="icon" size="20" color="white" />
          </Link>
          <div className={IncomeStyle.navBar}>
          <li><AiOutlineMinus className="icon" size="40" color="white" /></li>
          <li><AiOutlineMinus className="icon" size="40" color="#566479" /></li>
          <li><AiOutlineMinus className="icon" size="40" color="#566479" /></li>
          <li><AiOutlineMinus className="icon" size="40" color="#566479" /></li>
          </div>
      </div>
    );
  }
}

function FloatingPage() {
  return (
    <div className={IncomeStyle.container}>
      <TopNav></TopNav>

      언제 받으셨나요?

      <h2>21.10.30</h2>

      얼마 받으셨나요?

      <h2>0원</h2>
    </div>
);
}

export default FloatingPage;
