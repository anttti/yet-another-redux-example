import Immutable from 'immutable';

import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  ERROR_REQUESTING_ARTICLES
} from '../constants/ActionTypes';

const initialState = Immutable.fromJS({
  isLoading: false,
  isError: false,
  articles: []
});

export default function counter(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return state.merge({ isLoading: true, isError: false });
    case RECEIVE_ARTICLES:
      return state.merge({
        isLoading: false,
        isError: false,
        articles: Immutable.fromJS(action.payload)
      });
    case ERROR_REQUESTING_ARTICLES:
      return state.merge({ isLoading: false, isError: true });
    default:
      return state;
  }
}
