import React, { Component } from 'react';

export default () => {
    return (
        <div className="suggestions" data-ix="hide-initial-off-600-left">
          <div className="title-background-white">
            <div className="suggestions-title">Suggestions</div>
          </div>
          <div className="template" data-ix="template-ux-animation">
            <div className="template-titles">Sent to James G 3 months ago:</div>
            <div className="template-header">17 uses, &nbsp;<span style={{ fontWeight: 300 }}>Resp.&nbsp;rate = <strong>72%</strong></span>, Av. resp. speed = <strong>&nbsp;2hr</strong>
            </div>
            <div className="template-content">Great to hear back from you.
              <br/>
              <br/>Do you have time for a quick 15m call next week to check whether we might be a good fit for each other?
              <br/>
              <br/>I can tell you more about our services and if it makes sense, schedule a full demo of the product.
              <br/>
              <br/> I could do 9am PT Wednesday if that works for you? &nbsp;I'm also free Thursday morning if that's better.
              <br/>
              <br/> Otherwise if it is more convenient, you can also select a time that works for you from my calendar here: [link to calendar tool].</div>
          </div>
          <div className="template" data-ix="template-ux-animation">
            <div className="template-titles">You sent this to Freya M 2 months ago:</div>
            <div className="template-header">28&nbsp;uses, &nbsp;<span style={{ fontWeight: 300 }}>Resp.&nbsp;rate = <strong>67%</strong></span>, Av. resp. speed =&nbsp; <strong>12hr</strong>
            </div>
            <div className="template-content">I would love to tell you more about that. Do you have time for a quick 15m call next week to check whether we might be a good fit for each other? I can tell you more about our services and if it makes sense, schedule a full demo of the product.&nbsp;
              <br/>
              <br/>{ '{ Scheduling Suggestions }' }</div>
          </div>
          <div className="template" data-ix="template-ux-animation">
            <div className="template-titles">You sent this to Lillie D 2 weeks ago:</div>
            <div className="template-header">72&nbsp;uses, &nbsp;<span style={{ fontWeight: 300 }}>Resp.&nbsp;rate = <strong>42%</strong></span>, Av. resp. speed = <strong>73hr</strong>
            </div>
            <div className="template-content">Great to hear back from you.
              <br/>
              <br/> Yes we do. Do you have time for a quick 15m call next week to check whether we might be a good fit for each other? I can tell you more about our services and if it makes sense, schedule a full demo of the product.
              <br/>
              <br/>{ '{ Scheduling Suggestions }' }</div>
          </div>
          <div className="spacer-50"></div>
        </div>
    );
};