import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import EmailUnreplied from '../email_unreplied/index';
import Email from '../email/index';
import EmailSuggestion from '../email_suggestion/index';

// for not global organization bind here container and component
// load here containers

export default (props) => {
    console.log('Home',props)
    let isSuggestion = props.route.path === '/home/email/:id/suggestion';
    let isEmail = props.route.path === '/home/email/:id';

    return (
        <div className="lhs-master">
            <div className="main-view-master">
                <div className="inbox" data-ix="hide-initial-off-600-left">
                    <div className="inbox-scrollbox">
                        <div className="v2">
                            <div className="inbox-header-holder">
                                <img className="inbox-image" sizes="68.234375px" src="img/Teal-Logo-outline.png" srcset="images/Teal-Logo-outline-p-500x733.png 500w, images/Teal-Logo-outline-p-800x1173.png 800w, images/Teal-Logo-outline-p-1080x1583.png 1080w, images/Teal-Logo-outline-p-1600x2345.png 1600w, images/Teal-Logo-outline.png 1944w"/>
                                <div className="search-block"></div>
                            </div>
                            <EmailUnreplied />
                        </div>
                    </div>
                </div>
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