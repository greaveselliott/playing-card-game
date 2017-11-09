import CardCollection from './card-collection';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { cards: state.store.deck };
};

export default connect(mapStateToProps)(CardCollection);
