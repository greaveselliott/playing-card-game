import React from 'react';
import Button from '../button';
import ButtonDraw from '../button-draw';
import './controls.scss';


const Controls = ({on_shuffle_deck, on_sort_hand, on_shuffle_hand}) => {
    return (
        <div className="o-controls">
            <ButtonDraw class_name="o-controls__button"/>
            <Button click_handler={on_shuffle_deck} class_name="o-controls__button--shuffle-deck" text="Shuffle deck"/>
            <Button click_handler={on_sort_hand} class_name="o-controls__button--sort-hand" text="Sort cards by suit"/>
            <Button click_handler={on_shuffle_hand} class_name="o-controls__button--shuffle-hand" text="Shuffle hand"/>
        </div>
    );
}

export default Controls;