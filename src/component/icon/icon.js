import React from 'react';
import './icon.scss';
import Diamonds from './diamond.svg';
import Clubs from './clubs.svg';
import Hearts from './hearts.svg';
import Spades from './spades.svg';
import PropTypes from 'prop-types';

const Icon = ({className, icon}) => {
    return icon && <img className={className} src={get_icon_component(icon)} alt={icon}/>;
};

Icon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

const get_icon_component = (icon) => {

    switch (icon.toLowerCase()) {
        case 'diamonds':
            return Diamonds;
        case 'clubs':
            return  Clubs;
        case 'spades':
            return Spades;
        case 'hearts':
            return Hearts;
        default:
    }
}


export default Icon;