import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import EmailUnreplied from '../email_unreplied/index'
import Email from '../email/index'
import EmailSuggestion from '../email_suggestion/index'

// for not global organization bind here container and component
// load here containers

export default (props) => {
    console.log('Home',props)
    let isSuggestion = props.route.path === '/home/email/:id/suggestion';
    let isEmail = props.route.path === '/home/email/:id';

    return (
        <div className="lhs-master">
            <div className="main-view-master">
                <EmailUnreplied />
                { isEmail || isSuggestion ? 
                    <ReactCSSTransitionGroup 
                        component="div"
                        transitionName="example-left"
                        transitionAppear={true}
                        transitionEnter={true}
                        transitionEnterTimeout={1500}
                        transitionLeave={true} 
                        transitionLeaveTimeout={500} >
                        <Email className="example" key={ props.routeParams.id } id={ props.routeParams.id }/> 
                    </ReactCSSTransitionGroup>
                    : null }
                { isSuggestion ? 
                    <EmailSuggestion key={ props.route.path } id={ props.routeParams.id }/> 
                    : null }
            </div>
        </div>
    );
};