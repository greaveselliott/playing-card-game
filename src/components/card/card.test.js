import React from 'react';
import Card from './card';
import '../../jest-setup';
import { card_numbers, card_suits } from '../../logic/configuration';

describe("Card component", () => {  
    
    card_suits.forEach((suit) => {
        card_numbers.forEach((number) => {
            it(`Should render a Card component with a value of ${number} of ${suit}.`, () => {
                var props = {
                    number,
                    suit
                };
        
                const { enzymeComponent } = mockComponent(shallow, Card, props);   
        
                expect(enzymeComponent).toMatchSnapshot();
            });
        });
    });
});