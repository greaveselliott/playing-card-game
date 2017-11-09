import React from 'react';
import ControlsContainer from './controls-container';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';
import { sort_cards, shuffle_deck, shuffle_hand } from '../../logic/actions';

describe("Deck component", () => {  

    it("Should map dispatch methods to control props.", () => {

        const mockStore = createMockStore({
            store: {
            }
        });

        const component = shallowWithStore(<ControlsContainer />, mockStore);


        expect(component.props().on_shuffle_deck).toBeInstanceOf(Function);
        expect(component.props().on_sort_hand).toBeInstanceOf(Function);
        expect(component.props().on_shuffle_hand).toBeInstanceOf(Function);
    });
});