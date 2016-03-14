import Immutable from 'immutable';

import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  ERROR_REQUESTING_ARTICLES,
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  ERROR_REQUESTING_ARTICLE
} from 'actions/Article';

const initialState = Immutable.fromJS({
  isLoading: false,
  isError: false,
  articles: [],

  article: {
    isLoading: false,
    isError: false,
    article: null
  }
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
    case REQUEST_ARTICLE:
      return state.update('article', article => article.merge({ isLoading: true, isError: false }));
    case RECEIVE_ARTICLE:
      return state.update('article', article => article.merge({
        isLoading: false,
        isError: false,
        article: Immutable.fromJS(action.payload)
      }));
    case ERROR_REQUESTING_ARTICLE:
      return state.update('article', article => article.merge({ isLoading: false, isError: true }));
    default:
      return state;
  }
}
