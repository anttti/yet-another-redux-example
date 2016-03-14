import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import DevTools from './DevTools';
import ListView from 'containers/ListView';
import ArticleView from 'containers/ArticleView';

/* eslint-disable react/prop-types */
module.exports = class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            <Route path="/" component={App}>
              <IndexRoute component={ListView} />
              <Route path="article/:id" component={ArticleView} />
            </Route>
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
};
/* eslint-enable react/prop-types */
