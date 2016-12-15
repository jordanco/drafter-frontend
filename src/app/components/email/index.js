import React, { Component } from 'react';

import Info from '../../containers/email/info';
import Filter from './filter';
import List from '../../containers/email/list';
import EmailFunctionalities from '../../containers/email/functionalities';


export default (props) => {
    return (
        <div className="messaging" data-ix="hide-initial-off-600-left">
          <Info/>
          <div className="conversation">
            <Filter/>
            <List />
          </div>
          <EmailFunctionalities />
        </div>
    );
};