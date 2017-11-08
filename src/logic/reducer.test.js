import reducer, { initial_state } from './reducer';
import * as actions from './actions';
import _ from 'lodash';
import { deck_factory, card_numbers, card_suits } from './configuration';

describe('Reducer', () => {

  const INCREMENT_DRAW = "Increment number of cards drawn.";
  const DECREMENT_DRAW = "Decrement number of cards drawn.";
  const DRAW_CARDS = "Draw X number of cards.";
  const SHUFFLE_DECK = "Shuffle the deck.";
  const SORT_CARDS = "Sort cards in hand.";
  const SHUFFLE_HAND = "Shuffles cards in hand back into deck.";


  
  const data_drive_method = (data_drive_configuration) => {
    _.each(data_drive_configuration, (unit_test) => {
      it(unit_test.description, () => {

        // Arrange
        var mockReducer = reducer;
        var mockStore = mockReducer(initial_state, undefined);

        _.each(unit_test.action_sequence, (step) => {
          // Arranging
          var action_payload = step.action(...(step.action_parameters ? step.action_parameters : []));
          mockStore = mockReducer(mockStore, action_payload);

          // Assert
          _.get(expect(mockStore), step.matcher)(step.expected_state);
        });
      });
    });
  };

  const test_configuration_factory = (action) => {

      switch (action) {
      
        case INCREMENT_DRAW:
          return {
            action: actions.draw_increment,
            matcher: 'toMatchObject',
            expected_state: {
              cards_drawing: 2
            }
          }
          
        case DECREMENT_DRAW:
          return {
            action: actions.draw_decrement,
            matcher: 'toMatchObject',
            expected_state: {
              cards_drawing: 1
            }
          }

        case DRAW_CARDS:

          let mock_remaining_cards = deck_factory(card_suits, card_numbers);
          let mock_drawn_card = mock_remaining_cards.pop(mock_remaining_cards.length - 1);

          return {
            action: actions.draw_cards,
            matcher: 'toMatchObject',
            expected_state: {
              deck: mock_remaining_cards, 
              hand: [ mock_drawn_card ]
            }
          }

        case SHUFFLE_DECK:
          return {
            action: actions.shuffle_deck,
            matcher: 'not.toMatchObject',
            expected_state: {
              deck: deck_factory(card_suits, card_numbers)
            },
            expect_not: true
          }

        case SORT_CARDS:
        
          return {
            action: actions.sort_cards,
            matcher: 'toMatchObject',
            expected_state: {
              hand: [deck_factory(card_suits, card_numbers).pop()]
            }
          }

        case SHUFFLE_HAND:
          return {
            action: actions.shuffle_hand,
            matcher: 'toMatchObject',
            expected_state: {
              deck: deck_factory(card_suits, card_numbers)
            }
          }
        }
  }

  const data_drive_configuration = [
    {
      description: 'Should increment number of cards to be drawn by 1.',
      action_sequence: [
        {
          ...test_configuration_factory(INCREMENT_DRAW)
        }
      ]
  },
  {
    description: 'Should decrement number of cards to be drawn by 1.',
    action_sequence: [
      {
        ...test_configuration_factory(DECREMENT_DRAW)
      }
    ]
  },
    {
      description:'Should draw 1 card.',
      action_sequence: [
        {
          ...test_configuration_factory(DRAW_CARDS)
        },
      ]
    },
    {
      description: 'Should draw a cards, sort it, then shuffle the players hand back into deck.',
      action_sequence: [
        {
          ...test_configuration_factory(DRAW_CARDS)
        },
        {
          ...test_configuration_factory(SORT_CARDS)
        },
        {
          ...test_configuration_factory(SHUFFLE_HAND)
        }
      ]
    },
    {
      description:'Should shuffle deck.',
      action_sequence: [
        {
          ...test_configuration_factory(SHUFFLE_DECK)
        }
      ]
    }
];

  data_drive_method(data_drive_configuration);
});