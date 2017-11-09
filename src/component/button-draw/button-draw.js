import React from 'react'
import Button from '../button';
import './button-draw.scss';

const ButtonDraw = ({cards_drawing, class_name, on_decrement, on_draw, on_increment}) => {
    return (
        <div className={`m-button-draw${cards_drawing === 0 ? "--inactive" : ""} ${class_name ? class_name: ""}`}>
            <Button click_handler={on_decrement} class_name="m-button-draw__decrement" text="-"/>
            <Button click_handler={on_draw} class_name="m-button-draw__button" text={`Draw ${cards_drawing} cards`}/>
            <Button click_handler={on_increment} class_name="m-button-draw__increment" text="+"/>
        </div>
    );
}

export default ButtonDraw;