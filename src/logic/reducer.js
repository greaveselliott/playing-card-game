import * as CONSTANTS from './constants';
import _ from 'lodash';
import * as configuration from './configuration';

export const initial_state = {

};

const reducers = (state = initial_state, action) => {
  switch (_.get(action, 'type', undefined)) {


    default:
      return state;
  }
};

export default reducers;
