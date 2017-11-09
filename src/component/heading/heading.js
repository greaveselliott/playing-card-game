import React from 'react';
import './heading.scss';

const Heading = ({text, className}) => {
    return (
        <h2 className={`a-heading ${className}`}>{text}</h2>
    );
}

export default Heading;