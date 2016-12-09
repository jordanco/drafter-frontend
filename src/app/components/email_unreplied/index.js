import React, { Component } from 'react';
import {Link} from 'react-router';

import List from '../../containers/email_unreplied/list';

export default () => {
    return (
        <div class="inbox-block">
        	<span class="temp-large">Today</span>
            <List filter="today"/>
            <span class="temp-large">Yesterday</span>
            <List filter="yesterday"/>  
        </div>     
    );
};



            