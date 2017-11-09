import React from 'react';
import './button.scss';

const Button = ({click_handler, modifier, class_name, text}) => {
    return (
        <button onClick={()=>{click_handler();}} className={`a-button${modifier ? modifier :""} ${class_name ? class_name : ""}`}>{text}</button>
    )
}

export default Button;
