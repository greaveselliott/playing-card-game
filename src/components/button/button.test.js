import React from 'react';
import Button from './button';
import '../../jest-setup';

describe("Button component", () => {  

    it("Should render a Button component.", () => {
        const props = {
            text : "Label",
        };

        const { enzymeComponent } = mockComponent(shallow, Button, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });

    it("Should render a Button component with a modifier.", () => {
        const props = {
            text : "Label",
            modifier: "--active"
        };
        
        const { enzymeComponent } = mockComponent(shallow, Button, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });

    it("Should render a Button component with a additional class.", () => {
        const props = {
            text : "Label",
            modifier: "--active",
            class_name: "an addition class"
        };
        
        const { enzymeComponent } = mockComponent(shallow, Button, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });

    it("Should render a Button component with a click event handler.", () => {
        const spy = jest.fn();
        const props = {
            text : "Label",
            modifier: "--active",
            class_name: "an addition class",
            click_handler: spy
        };
        const { enzymeComponent } = mockComponent(shallow, Button, props);   

        enzymeComponent.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});