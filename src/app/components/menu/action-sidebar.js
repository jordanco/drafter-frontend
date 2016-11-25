import React, { Component } from 'react';

export default () => {
    return (
        <div className="action-bar" data-ix="hide-initial-off-600-left">
            <img className="logo-in-action-bar" src="img/Teal_Symbol.png"/>
            <div className="actionbar-main-buttons-holder">
                <div className="actionbar-button-holder">
                  <img className="action-bar-icon" data-ix="contacts-view" sizes="30px" src="img/contacts-icon.png" srcset="img/contacts-icon-p-500x500.png 500w, img/contacts-icon.png 512w"/>
                  <div className="actionbar-helper">Contacts&nbsp;/&nbsp;Relationships</div>
                </div>
                <div className="actionbar-button-holder"><img className="action-bar-icon" data-ix="contacts-view" src="img/User-heart.png"/>
                  <div className="actionbar-helper v3">Upload&nbsp;Contacts</div>
                </div>
                <div className="actionbar-button-holder"><img className="action-bar-icon" data-ix="contacts-view" sizes="30px" src="img/add-1.png" srcset="img/add-1-p-500x500.png 500w, img/add-1.png 512w"/>
                  <div className="actionbar-helper v2">Add&nbsp;Contacts&nbsp;to&nbsp;Teal</div>
                </div>
                <div className="actionbar-button-holder"><img className="action-bar-icon" data-ix="contacts-view" sizes="30px" src="img/upload.png" srcset="img/upload-p-500x500.png 500w, img/upload.png 512w"/>
                  <div className="actionbar-helper v3">Active&nbsp;Contacts</div>
                </div>
            </div>
            <img className="settings-button" data-ix="contacts-view" sizes="30px" src="img/settings-3.png" srcset="img/settings-3-p-500x500.png 500w, img/settings-3.png 512w" />
        </div>
    );
};