import bubble_sort from './bubble-sort';

describe('Bubble sort', () => {
    it('Should order array items smallests to largest.', () => {
        const mock = [
            { id: 29, suit: 'Hearts', number: '5' },
            { id: 37, suit: 'Hearts', number: 'K' },
            { id: 28, suit: 'Hearts', number: '4' },
            { id: 46, suit: 'Diamonds', number: '9' },
            { id: 15, suit: 'Spades', number: '4' } 
        ];
        
        const expected_value = [
            { id: 15, suit: 'Spades', number: '4' },
            { id: 28, suit: 'Hearts', number: '4' },
            { id: 29, suit: 'Hearts', number: '5' },
            { id: 37, suit: 'Hearts', number: 'K' },
            { id: 46, suit: 'Diamonds', number: '9' }
        ];

        const sorted_mock = bubble_sort(mock, 'id');

        expect(sorted_mock).toEqual(expected_value);
    });
});