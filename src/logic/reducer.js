import * as CONSTANTS from './constants';
import _ from 'lodash';
import { card_numbers, card_suits, get_number_of_cards, deck_factory } from './configuration';

export const initial_state = {
  cards_drawing: 1,
  deck: deck_factory( card_suits, card_numbers),
  hand: [],
  shuffling: false,
  sorting: false
};

const reducers = (state = initial_state, action) => {
  switch (_.get(action, 'type', undefined)) {

    case CONSTANTS.DRAW_INCREMENT:

      return {
        ..._.merge(state,{
          cards_drawing: state.cards_drawing < get_number_of_cards() ? state.cards_drawing + 1 : state.cards_drawing
        })
      };

    case CONSTANTS.DRAW_DECREMENT:
      return {
        ..._.merge(state,{
          cards_drawing: state.cards_drawing > 1 ? state.cards_drawing - 1 : state.cards_drawing
        })
      };

    default:
      return state;
  }
};

export default reducers;
