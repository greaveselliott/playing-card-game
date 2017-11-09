import Controls from './controls';
import { shuffle_deck, sort_cards, shuffle_hand } from '../../logic/actions'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        on_shuffle_deck: () => dispatch(shuffle_deck()),
        on_sort_hand: () => dispatch(sort_cards()),
        on_shuffle_hand: () => dispatch(shuffle_hand())
    }
};

export default connect(null, mapDispatchToProps)(Controls);