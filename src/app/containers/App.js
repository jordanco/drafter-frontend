/* CONNECT IT  LATER IF APP NEEDS CONNECTION GLOBAL
import { connect } from 'react-redux';


import Counter from '../components/Counter';
import * as counterActions from '../actions/counter';

function mapStateToProps(state, ownProps) {
    const { router } = ownProps;
  return { state, router };
}

const mapDispatchToProps = counterActions; // { ...counterActions, ...};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/

import React, { PropTypes, Component } from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


import Layout from '../components/Layout'
import * as Pages from '../components/pages'

const App = ({ store }) => {
   const history = syncHistoryWithStore(hashHistory, store);
   return (
       <Router history={history}>
          <Route path="/" component={Layout} >
            <IndexRoute component={Pages.Home} />
            <Route path="/home" component={Pages.Home} />
            <Route key="home.email" path="/home/email/:id" component={Pages.Home} />
            <Route key="home.email.suggestion" path="/home/email/:id/suggestion" component={Pages.Home} />
            <Route path="/contact" component={Pages.Contact} />
          </Route>
        </Router>
    )
 };

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;