import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import extension from './extension';
import messages_unreplied from './email_unreplied/list';

export default (
  typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id ?
    combineReducers({ counter, messages_unreplied, extension, routing: routerReducer }) :
    combineReducers({ counter, messages_unreplied, routing: routerReducer })
);
