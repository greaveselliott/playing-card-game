import CardCollection from './card-collection';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { cards: state.store.hand };
};

export default connect(mapStateToProps)(CardCollection);
