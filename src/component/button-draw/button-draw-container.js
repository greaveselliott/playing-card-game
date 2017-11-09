import ButtonDraw from './button-draw';
import { draw_decrement, draw_increment, draw_cards } from '../../logic/actions'
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
    return {
        on_decrement: () => dispatch(draw_decrement()),
        on_draw: () => dispatch(draw_cards()),
        on_increment: () => dispatch(draw_increment())
    }
}

const mapStateToProps = state => {
    return { cards_drawing: state.store.cards_drawing };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDraw);