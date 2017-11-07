import React from 'react';
import App from './app';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';
import { initial_state } from './logic/reducer';

describe("App container", () => {  

    it("Should map dispatch methods to control props.", () => {

        const mockStore = createMockStore({ initial_state });

        const component = shallowWithStore(<App />, mockStore);

        expect(component).toMatchSnapshot();
    });
});