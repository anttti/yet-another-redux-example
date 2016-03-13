import {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  ERROR_REQUESTING_ARTICLES
} from 'constants/ActionTypes';

const requestArticles = () => {
  return dispatch => {
    dispatch({ type: REQUEST_ARTICLES });
    fetch('http://localhost:3002/posts')
      .then(response => response.json())
      .then(articles => dispatch({ type: RECEIVE_ARTICLES, payload: articles }))
      .catch(e => dispatch({ type: ERROR_REQUESTING_ARTICLES, error: e }));
  };
};

export {
  requestArticles
};
