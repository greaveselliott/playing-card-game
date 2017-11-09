import React from 'react';
import CardCollection from './card-collection';
import '../../jest-setup';

describe("Deck component", () => {  

    it("Should render an empty CardCollection component.", () => {
        const props = {
        };

        const { enzymeComponent } = mockComponent(shallow, CardCollection, props);   

        expect(enzymeComponent).toMatchSnapshot();
    });

    it("Should render a CardCollection component with cards.", () => {
        const props = {
            cards:[
                {
                  id: 2,
                  suit: 'Clubs',
                  number: '4'
                },
                {
                  id: 26,
                  suit: 'Hearts',
                  number: '2'
                },
                {
                  id: 43,
                  suit: 'Diamonds',
                  number: '6'
                },
                {
                  id: 20,
                  suit: 'Spades',
                  number: '9'
                },
                {
                  id: 23,
                  suit: 'Spades',
                  number: 'Q'
                },
                {
                  id: 36,
                  suit: 'Hearts',
                  number: 'Q'
                },
                {
                  id: 49,
                  suit: 'Diamonds',
                  number: 'Q'
                },
                {
                  id: 10,
                  suit: 'Clubs',
                  number: 'Q'
                },
                {
                  id: 11,
                  suit: 'Clubs',
                  number: 'K'
                },
                {
                  id: 40,
                  suit: 'Diamonds',
                  number: '3'
                },
                {
                  id: 17,
                  suit: 'Spades',
                  number: '6'
                },
                {
                  id: 28,
                  suit: 'Hearts',
                  number: '4'
                },
                {
                  id: 48,
                  suit: 'Diamonds',
                  number: 'J'
                },
                {
                  id: 18,
                  suit: 'Spades',
                  number: '7'
                },
                {
                  id: 25,
                  suit: 'Spades',
                  number: 'A'
                },
                {
                  id: 5,
                  suit: 'Clubs',
                  number: '7'
                },
                {
                  id: 24,
                  suit: 'Spades',
                  number: 'K'
                },
                {
                  id: 4,
                  suit: 'Clubs',
                  number: '6'
                },
                {
                  id: 19,
                  suit: 'Spades',
                  number: '8'
                },
                {
                  id: 38,
                  suit: 'Hearts',
                  number: 'A'
                }
              ],
              hand: [
                {
                  id: 51,
                  suit: 'Diamonds',
                  number: 'A'
                },
                {
                  id: 50,
                  suit: 'Diamonds',
                  number: 'K'
                },
                {
                  id: 45,
                  suit: 'Diamonds',
                  number: '8'
                },
                {
                  id: 41,
                  suit: 'Diamonds',
                  number: '4'
                },
                {
                  id: 39,
                  suit: 'Diamonds',
                  number: '2'
                },
                {
                  id: 34,
                  suit: 'Hearts',
                  number: '10'
                },
                {
                  id: 33,
                  suit: 'Hearts',
                  number: '9'
                },
                {
                  id: 31,
                  suit: 'Hearts',
                  number: '7'
                },
                {
                  id: 30,
                  suit: 'Hearts',
                  number: '6'
                },
                {
                  id: 27,
                  suit: 'Hearts',
                  number: '3'
                },
                {
                  id: 21,
                  suit: 'Spades',
                  number: '10'
                },
                {
                  id: 15,
                  suit: 'Spades',
                  number: '4'
                },
                {
                  id: 14,
                  suit: 'Spades',
                  number: '3'
                },
                {
                  id: 13,
                  suit: 'Spades',
                  number: '2'
                },
                {
                  id: 12,
                  suit: 'Clubs',
                  number: 'A'
                },
                {
                  id: 8,
                  suit: 'Clubs',
                  number: '10'
                },
                {
                  id: 7,
                  suit: 'Clubs',
                  number: '9'
                },
                {
                  id: 1,
                  suit: 'Clubs',
                  number: '3'
                },
                {
                  id: 37,
                  suit: 'Hearts',
                  number: 'K'
                },
                {
                  id: 0,
                  suit: 'Clubs',
                  number: '2'
                },
                {
                  id: 42,
                  suit: 'Diamonds',
                  number: '5'
                },
                {
                  id: 47,
                  suit: 'Diamonds',
                  number: '10'
                },
                {
                  id: 32,
                  suit: 'Hearts',
                  number: '8'
                },
                {
                  id: 46,
                  suit: 'Diamonds',
                  number: '9'
                },
                {
                  id: 35,
                  suit: 'Hearts',
                  number: 'J'
                },
                {
                  id: 22,
                  suit: 'Spades',
                  number: 'J'
                },
                {
                  id: 9,
                  suit: 'Clubs',
                  number: 'J'
                },
                {
                  id: 44,
                  suit: 'Diamonds',
                  number: '7'
                },
                {
                  id: 16,
                  suit: 'Spades',
                  number: '5'
                },
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
              ],
            heading: "Mock heading"
        };

        const { enzymeComponent } = mockComponent(shallow, CardCollection, props);   

        expect(enzymeComponent).toMatchSnapshot();
    })
});