import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import extension from './extension';
import emails from './email_unreplied/list';
import emailMsg from './email/reply';


export default (
  typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.id ?
    combineReducers({ counter, emails, emailMsg, extension, routing: routerReducer }) :
    combineReducers({ counter, emails, emailMsg, routing: routerReducer })
);
