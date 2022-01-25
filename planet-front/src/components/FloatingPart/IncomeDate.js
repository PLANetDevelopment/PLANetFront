import React, { Component } from 'react';

class IncomeDate extends Component {
    render(){
        const todayTime = () => {
            let now = new Date(); //현재 날짜 및 시간
            let todayYear = now.getFullYear();
            let todayMonth = ("0" + (now.getMonth() + 1)).slice(-2);
            let todayDate = ("0" + now.getDate()).slice(-2);

            return todayYear + '.' + todayMonth + '.' + todayDate;
        }
        return(
            <div>
                {todayTime().slice(2, 10)}
            </div>
        );
    }
}

export default IncomeDate;