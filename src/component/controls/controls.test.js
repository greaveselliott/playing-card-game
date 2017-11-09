import React from 'react';
import Controls from './controls';
import '../../jest-setup';

describe("Controls component", () => {  

    const get_control_props = () => {
        return {
            on_shuffle_deck: (f) => f, 
            on_sort_hand: (f) => f, 
            on_shuffle_hand: (f) => f
        }
    };

    it("Should render a Controls component.", () => {

        const props = get_control_props()

        const { enzymeComponent } = mockComponent(shallow, Controls, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });

    const data_drive_configuration = [
        {
            selector: { class_name: 'o-controls__button--shuffle-deck' },
            property: 'on_shuffle_deck',
        },

        {
            selector: { class_name: 'o-controls__button--sort-hand' },
            property: 'on_sort_hand',
        },

        {
            selector: { class_name: 'o-controls__button--shuffle-hand' },
            property: 'on_shuffle_hand',
        }
    ];

    data_drive_configuration.forEach((unit_test) => {

        const spy = jest.fn();

        const props = get_control_props();

        props[unit_test.property] = spy;

        const { enzymeComponent } = mockComponent(shallow, Controls, props);  

        enzymeComponent.children().find(unit_test.selector).dive().simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});