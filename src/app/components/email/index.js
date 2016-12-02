import React, { Component } from 'react';
import List from '../../containers/email/list'



export default (props) => {
    return (
        <div className="messaging" data-ix="hide-initial-off-600-left">
          <div className="profile">
            <div className="profile-jp">
              <div className="side-profile">
                <img className="profile-image" src="img/profilePicJonathan.png" />
                <div className="minibio">Head of Sales USA at Unilever</div>
                <div className="contact-details">Investor at &nbsp;Pretty Good
                  <br/>Advisor at &nbsp;Salezy
                  <br/>
                  <br/>john@unilever.com
                  <br/>johnp72@gmail.com
                  <br/>+1 415 732 123</div>
                <div className="connect-button">
                  <img className="li-connect-image" sizes="100vw" src="img/linkedin-1.png" srcSet="img/linkedin-1-p-500x500.png 500w, img/linkedin-1.png 512w"/>
                  <div>Click to connect</div>
                </div>
                <div className="vip-button">
                  <img className="_20 li-connect-image" sizes="100vw" src="img/award.png" srcSet="img/award-p-500x500.png 500w, img/award.png 512w"/>
                  <div>Set as VIP</div>
                </div>
                <div className="merge">
                  <img className="li-connect-image" sizes="100vw" src="img/arrows-merge-pointing-to-right.png" srcSet="img/arrows-merge-pointing-to-right-p-500x500.png 500w, img/arrows-merge-pointing-to-right.png 512w"/>
                  <div>Merge contact</div>
                </div>
              </div>
              <div className="location">San Francisco Bay Area</div>
              <div className="name-big">John Pritchard</div>
            </div>
            <div className="profile---jb">
              <div className="side-profile">
                <img className="profile-image" src="img/128-7.jpg"/>
                <div className="minibio">HR Manager at Company.com</div>
                <div className="contact-details">
                  <br/>james@company.com
                  <br/>+44 7742 77 98 80</div>
                <div className="connect-button">
                  <img className="li-connect-image" sizes="(max-width: 767px) 15px, (max-width: 991px) 2vw, 15px" src="img/linkedin-1.png" srcSet="img/linkedin-1-p-500x500.png 500w, img/linkedin-1.png 512w"/>
                  <div>Click to connect</div>
                </div>
                <div className="vip-button">
                  <img className="_20 li-connect-image" sizes="20px" src="img/award.png" srcSet="img/award-p-500x500.png 500w, images/award.png 512w"/>
                  <div>Set as VIP</div>
                </div>
                <div className="merge">
                  <img className="li-connect-image" sizes="(max-width: 767px) 15px, (max-width: 991px) 2vw, 15px" src="img/arrows-merge-pointing-to-right.png" srcSet="img/arrows-merge-pointing-to-right-p-500x500.png 500w, img/arrows-merge-pointing-to-right.png 512w"/>
                  <div>Merge contact</div>
                </div>
              </div>
              <div className="location">London, UK</div>
              <div className="name-big">James Brown</div>
            </div>
          </div>
          <div className="conversation">
            <div className="toggles-1">
              <div className="toggles-1-a">
                <div className="thread-view-button">Thread</div>
                <div className="contact-view-button">Contact</div>
                <div className="company-view-button">Company</div>
              </div>
              <div className="toggle-1-b">
                <div className="you-filter">You</div>
                <div className="team-filter">Team</div>
              </div>
            </div>
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