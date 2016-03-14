import 'styles/article.scss';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ImmutablePropTypes from 'react-immutable-proptypes';
import * as ArticleActions from 'actions/Article';
import LoadingSpinner from 'components/LoadingSpinner';
import Error from 'components/Error';

class ArticleView extends Component {
  componentWillMount() {
    this.props.actions.requestArticle(this.props.params.id);
  }

  render() {
    if (this.props.isLoading) {
      return <LoadingSpinner />;
    }
    if (this.props.isError) {
      return <Error message="Error loading article!"/>;
    }
    if (!this.props.article) {
      return <div></div>;
    }
    return (
      <div className="article">
        <Link to="/" className="button">← Back</Link>
        <section className="article__content">
          <h1>{this.props.article.get('title')}</h1>
          <h3>{this.props.article.get('author')}</h3>
          <p>{this.props.article.get('body')}</p>
        </section>
      </div>
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
