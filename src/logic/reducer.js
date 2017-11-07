import * as CONSTANTS from './constants';
import _ from 'lodash';
import { card_numbers, card_suits, deck_factory } from './configuration';
import shuffle from '../logic/shuffle';
import bubble_sort from '../logic/bubble-sort';

export const initial_state = {
  cards_drawing: 1,
  deck: deck_factory( card_suits, card_numbers),
  hand: []
};

const reducers = (state = initial_state, action) => {
  switch (_.get(action, 'type', undefined)) {


    case CONSTANTS.DRAW_INCREMENT:

      return Object.assign({}, state, {
        cards_drawing: state.cards_drawing < state.deck.length ? state.cards_drawing + 1 : state.cards_drawing
      });

    case CONSTANTS.DRAW_DECREMENT:
      return Object.assign({}, state, {
        cards_drawing: state.cards_drawing > 1 ? state.cards_drawing - 1 : state.cards_drawing
      })

    case CONSTANTS.DRAW_CARDS:
      
      let remaining_cards = state.deck.slice();
      let drawn_cards = [];

      for (var i = 0, card_index = remaining_cards.length; i < state.cards_drawing; i++, card_index--) {
          drawn_cards.push(remaining_cards.pop(card_index));
      }
      
      return Object.assign({}, state, {
        cards_drawing: remaining_cards.length < state.cards_drawing ? remaining_cards.length : state.cards_drawing,
        deck: remaining_cards,
        hand: [...state.hand, ...drawn_cards]
      });

    case CONSTANTS.SHUFFLE_DECK:
      return Object.assign({}, state, {
        deck: shuffle(state.deck)
      });

    case CONSTANTS.SORT_CARDS:
      return Object.assign({}, state, {
        hand: bubble_sort(state.hand.slice(), "id")
      });

    case CONSTANTS.SHUFFLE_HAND:

      return Object.assign({}, state, {
        cards_drawing: 1,
        deck: [...state.deck, ...state.hand],
        hand: []
      });

    default:
      return state;
  }
};

export default reducers;
