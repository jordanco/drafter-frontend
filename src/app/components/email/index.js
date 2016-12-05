import React, { Component } from 'react';

import Info from '../../containers/email/info'
import Filter from './filter'
import List from '../../containers/email/list'



export default (props) => {
    return (
        <div className="messaging" data-ix="hide-initial-off-600-left">
          <Info/>
          <div className="conversation">
            <Filter />
            <List />
          </div>
          <div className="editor">
            <div className="typebox">
              <div className="w-form">
                <form data-name="Email Form" id="email-form" name="email-form">
                  <textarea className="textatea w-input" data-ix="show-suggestions" id="field" maxlength="5000" name="field" placeholder="Type response here"></textarea>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form</div>
                </div>
              </div>
            </div>
            <div className="editor-buttons">
              <div className="connect-button offset"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
                <div>Templates</div>
              </div>
              <div className="connect-button offset-2"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
                <div>Open in Gmail</div>
              </div>
              <div className="connect-button"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
                <div>Other</div>
              </div>
              <div className="connect-button"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
                <div>Snooze</div>
              </div>
              <div className="connect-button"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
                <div>Send</div>
              </div>
            </div>
          </div>
        </div>
    );
};