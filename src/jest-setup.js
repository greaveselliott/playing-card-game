// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';
import React from 'react';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};

/**
 * Function to mock an Enzyme component.
 * @param enzymeRender {function} render function.
 * @param Component {JSXComponent} component type to mock.
 * @param componentProps {Object} optional component properties.
 * @param reduxStoreContext {Object} optional redux store context.
 * @returns Enzyme Component.
 */
global.mockComponent = function (enzymeRender, Component, componentProps = {}, reduxStoreContext = {}) {

    let jsxElement = <Component {...componentProps} />;
    const enzymeComponent = enzymeRender(jsxElement, reduxStoreContext);

    return {
        componentProps,
        enzymeComponent
    }
};

/**
 * Function to create data driven tests against poly component configurations
 * @param Component {JSXComponent} component type to mock.
 * @param configurations {Array of objects} An object containing the test configuration for each test case. Each object within this array must have a 'description' and 'props' property.
 * @returns nothing
 */
global.assertComponentProperties = function (Component, configurations) {

    const expectedProperties = ['description', 'props'];

    configurations.forEach( (testCase) => {

        expectedProperties.forEach((property) => {
            if(!testCase.hasOwnProperty(property)) {
                throw new Error(`Error: assertComponentProperties 'configuration' property does not have required '${property}' property.`);
            }
        });

        const { enzymeComponent } = mockComponent(shallow, Component, testCase.props);

        it(testCase.description, () => {
            expect(enzymeComponent).toMatchSnapshot();
        });
    });
};

global.mockResponse = function (status, statusText, response) {
    return new window.Response(response, {
        status: status,
        statusText: statusText,
        headers: {
            'Content-type': 'application/json'
        }
    });
};