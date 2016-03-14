import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ArticleActions from 'actions/Article';
import Articles from 'components/Articles';

class ListView extends Component {
  render() {
    const { articles, isLoading, actions } = this.props;
    return (
      <div>
        <button className="button" onClick={actions.requestArticles}>
          Fetch articles
        </button>
        <Articles articles={articles} isLoading={isLoading} />
      </div>
    );
  }
}

ListView.propTypes = {
  articles: ImmutablePropTypes.list.isRequired,
  isLoading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

const select = store => {
  return {
    isLoading: store.article.get('isLoading'),
    isError: store.article.get('isError'),
    articles: store.article.get('articles')
  };
};

const mapActions = dispatch => {
  return {
    actions: bindActionCreators(ArticleActions, dispatch)
  };
};

export default connect(
  select,
  mapActions
)(ListView);
