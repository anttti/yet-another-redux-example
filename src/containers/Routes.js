import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import ListView from 'containers/ListView';
import ArticleView from 'containers/ArticleView';

class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={App}>
          <IndexRoute component={ListView} />
          <Route path="article/:id" component={ArticleView} />
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};

export default Routes;
