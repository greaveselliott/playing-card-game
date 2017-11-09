import React from 'react';
import Heading from './heading';
import '../../jest-setup';

describe("Heading component", () => {  

    it("Should render a Heading component.", () => {
        const props = {
            text: "Some heading.."
        };

        const { enzymeComponent } = mockComponent(shallow, Heading, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });
});