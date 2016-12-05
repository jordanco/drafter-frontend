import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import {IntlProvider} from 'react-intl';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <IntlProvider locale="en">
        <App store={store}/>
    </IntlProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;