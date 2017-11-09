import React from 'react';
import DeckContainer from './deck-container';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';

describe("Deck container.", () => {  

    it("Should render an Deck Container.", () => {

        const mockStore = createMockStore({
            store: {
                deck: [
                    {
                        id: 6,
                        suit: 'Clubs',
                        number: '8'
                    },
                    {
                        id: 29,
                        suit: 'Hearts',
                        number: '5'
                    },
                    {
                        id: 3,
                        suit: 'Clubs',
                        number: '5'
                    }
                ]
            }
        });

        const component = shallowWithStore(<DeckContainer />, mockStore);

        expect(component).toMatchSnapshot();
    });
});