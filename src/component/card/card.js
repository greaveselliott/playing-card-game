import React from 'react';
import './card.scss';
import Icon from '../icon';

const Card = ({number, suit}) => {
    return (
        <figure className="m-card">
            <figcaption className={`m-card__number--${suit.toLowerCase()}`}>{number}</figcaption>
            <Icon className="m-card__suit" icon={suit}/>
        </figure>
    );
}

export default Card;