import React, { Component }  from 'react';
import InputDateStyle from './InputDate.module.css'

class InputPrice extends Component {
    state = {
        price: ''
    }
    
    handleInput = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    render() {
        const inputP = this.state.price;
        return (
           <div className={InputDateStyle.inputPrice}>
            <input
              name = "inputP"
              value={inputP}
              onChange={this.handleInput}
              placeholder='0원'
            />
          </div>
        );
    }
}

export default InputPrice;