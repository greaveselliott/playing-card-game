import React from 'react';
import HandContainer from './hand-container';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';

describe("Hand container.", () => {  

    it("Should render an Deck Container.", () => {

        const mockStore = createMockStore({
            store: {
                hand: [
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

        const component = shallowWithStore(<HandContainer />, mockStore);

        expect(component).toMatchSnapshot();
    });
});