import React, { Component } from 'react';
import BottomBtnStyle from './BottomBtn.module.css'

//뒤로, 다음 버튼 
class BottomBtn extends Component {
    render() {
      return (
        <div className={BottomBtnStyle.bottomBtn}>
            <button className={BottomBtnStyle.bottomBtnDisabled}>뒤로</button>
            <button className={BottomBtnStyle.bottomBtnActive}>다음</button>
        </div>
      );
    }
  }

  export default BottomBtn;