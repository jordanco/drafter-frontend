import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import extension from './extension';
import UnrepliedEmailReducer from './email_unreplied/list';

export default (
  typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id ?
    combineReducers({ counter, UnrepliedEmailReducer, extension, routing: routerReducer }) :
    combineReducers({ counter, UnrepliedEmailReducer, routing: routerReducer })
);
