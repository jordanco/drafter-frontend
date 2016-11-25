import React, { PropTypes, Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';


import Layout from '../components/Layout';
import Home from '../components/pages/home';
import App from './App';




class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(hashHistory, store);

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Layout}>
            <IndexRoute component={Home} />
            <Route path="/home" component={Home} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;