import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ArticleActions from 'actions/ArticleActions';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Articles from 'components/Articles';

class App extends Component {
  render() {
    const { articles, isLoading, actions } = this.props;
    return (
      <div className="app">
        <Header />
        <section className="app-content">
          <button onClick={actions.requestArticles}>Fetch articles</button>
          <Articles articles={articles} isLoading={isLoading} />
        </section>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  articles: PropTypes.array.isRequired,
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
)(App);
