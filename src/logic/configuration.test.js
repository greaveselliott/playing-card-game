import {card_suits, card_numbers, deck_factory} from './configuration';

describe('Configuraiton', () => {

    const deck = deck_factory(card_suits, card_numbers);

    for (var i = 0; i < deck.length; i++ ) {

        var actual_suit = deck[i].suit;
        var actual_number = deck[i].number;
        
        var expected_suit = card_suits[i % card_suits.length];
        var expected_number = card_numbers[i % card_numbers.length];

        it(`Card ${i+1} should be ${expected_number} of ${expected_suit}.`, () => {
            expect(actual_suit).toEqual(expected_suit);
            expect(actual_number).toEqual(expected_number);
        });
    }
});