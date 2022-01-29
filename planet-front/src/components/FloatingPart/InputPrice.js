import React, { Component }  from 'react';
import InputDateStyle from './InputDate.module.css'

class InputPrice extends Component {
    state = {
        price: ''
    }
    
    handleChange = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    render() {
        return (
           <div className={InputDateStyle.inputPrice}>
            <input
              placeholder='0원'
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
        );
    }
}

export default InputPrice;