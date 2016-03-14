import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <section className="app-content">
          {this.props.children}
        </section>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
