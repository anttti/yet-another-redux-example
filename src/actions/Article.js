const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
const ERROR_REQUESTING_ARTICLES = 'ERROR_REQUESTING_ARTICLES';
const REQUEST_ARTICLE = 'REQUEST_ARTICLE';
const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
const ERROR_REQUESTING_ARTICLE = 'ERROR_REQUESTING_ARTICLE';

const API_URL = 'http://localhost:3002';

const requestArticles = () => {
  return (dispatch) => {
    dispatch({ type: REQUEST_ARTICLES });
    fetch(`${API_URL}/articles`)
      .then(response => response.json())
      .then(articles => dispatch({ type: RECEIVE_ARTICLES, payload: articles }))
      .catch(e => dispatch({ type: ERROR_REQUESTING_ARTICLES, error: e }));
  };
};

const requestArticle = (id) => {
  return (dispatch) => {
    dispatch({ type: REQUEST_ARTICLE });
    fetch(`${API_URL}/articles/${id}`)
      .then(response => response.json())
      .then(article => dispatch({ type: RECEIVE_ARTICLE, payload: article }))
      .catch(e => dispatch({ type: ERROR_REQUESTING_ARTICLE, error: e }));
  };
};

export {
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  ERROR_REQUESTING_ARTICLES,
  REQUEST_ARTICLE,
  RECEIVE_ARTICLE,
  ERROR_REQUESTING_ARTICLE,
  requestArticles,
  requestArticle
};
