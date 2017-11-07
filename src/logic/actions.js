import * as CONSTANTS from './constants';

export const draw_increment = () => {
    return {
        type: CONSTANTS.DRAW_INCREMENT
    }
};

export const draw_decrement = () => {
    return {
        type: CONSTANTS.DRAW_DECREMENT
    }
};

export const draw_cards = () => {
    return {
        type: CONSTANTS.DRAW_CARDS
    }
};

export const sort_cards = () => {
    return {
        type: CONSTANTS.SORT_CARDS
    }
};

export const shuffle_deck = () => {
    return {
        type: CONSTANTS.SHUFFLE_DECK
    }
};

export const shuffle_hand = () => {
    return {
        type: CONSTANTS.SHUFFLE_HAND
    }
};