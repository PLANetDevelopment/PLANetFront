import React, { Component }  from 'react';
import InputDateStyle from './InputDate.module.css'

class InputDate extends Component {
    todayTime = () => {
        let now = new Date(); //현재 날짜 및 시간
        let todayYear = now.getFullYear();
        let todayMonth = ("0" + (now.getMonth() + 1)).slice(-2);
        let todayDate = ("0" + now.getDate()).slice(-2);

        return todayYear + '.' + todayMonth + '.' + todayDate;
    }

    state = {
        //default : 현재 날짜 데이터
        date: this.todayTime().slice(2, 10)
    }
    
    handleChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    render() {
        return (
           <div className={InputDateStyle.inputData}>
            <input
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
        );
    }
}

export default InputDate;