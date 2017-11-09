import React from 'react';
import Icon from './icon';
import '../../jest-setup';
import { card_suits } from '../../logic/configuration';

describe("Icon component", () => {  

    card_suits.forEach((suit) => {
        it("Should render a Icon component.", () => {
            const props = {
                icon: suit
            };
    
            const { enzymeComponent } = mockComponent(shallow, Icon, props);   
    
            expect(enzymeComponent).toMatchSnapshot();
        });
    });
});