import React, { Component } from 'react';

import '../../assets/css/normalize.css';
import '../../assets/css/webflow.css';
import '../../assets/css/drafter2.webflow.css';

import ActionSidebarMenu from '../components/menu/action-sidebar';

export default (props) => {
    return (
        <div className="master">
            <ActionSidebarMenu />
            {props.children}
        </div>
    );
};