import React from 'react';
import ButtonDraw from './button-draw';
import '../../jest-setup';

describe("ButtonDraw component", () => {  

    it("Should render a ButtonDraw component.", () => {
        const props = {
        };

        const { enzymeComponent } = mockComponent(shallow, ButtonDraw, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });
    
    let data_drive_configuration = [
        {
            description: 'Should trigger on_decrement handler.',
            selector: '.m-button-draw__decrement',
            spy: 'on_decrement'
        },
        {
            description: 'Should trigger on_draw handler.',
            selector: '.m-button-draw__button',
            spy: 'on_draw'
        },
        {
            description: 'Should trigger on_increment handler.',
            selector: '.m-button-draw__increment',
            spy: 'on_increment'
        }
    ];
    
    const spy = {
        [data_drive_configuration[0].spy]: jest.fn(), 
        [data_drive_configuration[1].spy]: jest.fn(), 
        [data_drive_configuration[2].spy]: jest.fn()
    }

    const props = {
        cards_drawing: 1, 
        class_name: "mock_css_class", 
        on_decrement: spy.on_decrement, 
        on_draw: spy.on_draw, 
        on_increment: spy.on_increment
    };

    const { enzymeComponent } = mockComponent(mount, ButtonDraw, props);

    data_drive_configuration.forEach((unit_test) => {
        it(unit_test.description, () => {
            enzymeComponent.find(unit_test.selector).simulate('click');
            expect(spy[unit_test.spy]).toHaveBeenCalled();
        });
    });
});