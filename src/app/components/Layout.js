import React, { Component } from 'react';

import './Layout.css';

export default (props) => {
    return (
        <div>
            <h1>HELLO FROM LAYOUT</h1>
            {props.children}
        </div>
    );
};