import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ArticleActions from 'actions/Article';

class ArticleView extends Component {
  componentWillMount() {
    this.props.actions.requestArticle(this.props.params.id);
  }

  render() {
    if (this.props.isLoading) {
      return <img src={require('../assets/loading.gif')} />;
    }
    if (this.props.isError) {
      return <div>Error loading article!</div>;
    }
    if (!this.props.article) {
      return <div></div>;
    }
    return (
      <section>
        <h1>{this.props.article.get('title')}</h1>
        <h3>{this.props.article.get('author')}</h3>
        <p>{this.props.article.get('body')}</p>
      </section>
    );
  }
}

ArticleView.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  article: ImmutablePropTypes.map,
  params: PropTypes.object // Inserted by react-router-redux
};

const select = store => {
  return {
    isLoading: store.article.getIn(['article', 'isLoading']),
    isError: store.article.getIn(['article', 'isError']),
    article: store.article.getIn(['article', 'article'])
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
)(ArticleView);
