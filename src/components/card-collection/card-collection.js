import React from 'react'
import './card-collection.scss';
import Heading from '../heading';
import Card from '../card';
import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';

const Grid = makeResponsive(measureItems(CSSGrid), {
  maxWidth: 800,
  minPadding: 0
});

const CardCollection = ({cards, heading}) => {
    return (
        <section className="m-card-collection">
            <Heading className="m-card-collection__title" text={heading}/>
            <Grid
                className="m-card-collection__cards"
                columns={12}
                columnWidth={50}
                itemHeight={70}
                gutterWidth={5}
                gutterHeight={5}
                layout={layout.simple}
                duration={650}
                easing="ease-out"
                enter={() => ({ scale: 0, opacity: 0 })}
                entered={() => ({ scale: 1, opacity: 1 })}
                exit={() => ({ scale: 0, opacity: 0 })}
            >
                {cards && cards.map((card)=> {
                    return <div key={card.id}><Card number={card.number} suit={card.suit}/></div>
                })}
            </Grid>
        </section>
    );
}

export default CardCollection;