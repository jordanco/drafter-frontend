import React, { Component } from 'react';
import {Link} from 'react-router';

import List from '../../containers/email_unreplied/list'

export default () => {
    return (
        <div className="inbox" data-ix="hide-initial-off-600-left">
          <div className="inbox-scrollbox">
           <h4>Today</h4>
           <List title="Today" />
           <h4>Yesterday</h4>
           <List title="Yesterday"/>
          </div>
        </div>
    );
};