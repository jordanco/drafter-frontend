import React, { Component } from 'react';
import {Link} from 'react-router';

export default () => {
    return (
         <div className="inbox" data-ix="hide-initial-off-600-left">
          <div className="inbox-scrollbox">
            <div className="v1">
              <div className="inbox-header-holder">
                <img className="inbox-image" sizes="100vw" src="img/Teal-Logo-outline.png" srcset="images/Teal-Logo-outline-p-500x733.png 500w, images/Teal-Logo-outline-p-800x1173.png 800w, images/Teal-Logo-outline-p-1080x1583.png 1080w, images/Teal-Logo-outline-p-1600x2345.png 1600w, images/Teal-Logo-outline.png 1944w"/>
                <div className="search-block"></div>
              </div>
              <div className="inbox-block"><span className="hello">Alex</span><span className="hello2">, good morning.</span>
                <br/>
                <br/>Let's get you through your emails.
                <br/>I've prioritised what I think you need to do below.</div>
              <div className="vip-block"><span className="temp-large">VIPs to reply to:</span>
                <br/>
                <br/>Reply to these 3 VIP contacts <span className="red">asap</span>. (?)
                <br/>
                <span className="person-inbox" data-ix="inbox-person-actions-default"> 🎖&nbsp;&nbsp;John Pritchard <span data-ix="hide-initial-100-opacity" className="job-title-inbox">2m ago, Unilever, Head of Sales USA</span>
                <br/>
                </span><span className="person-inbox" data-ix="inbox-person-actions-default">🎖&nbsp;&nbsp;Oliver Jones <span xmlns="http://www.w3.org/1999/xhtml" data-ix="hide-initial-100-opacity" className="job-title-inbox">17m ago, Samsung, CMO</span>
                <br/>
                </span><span className="person-inbox" data-ix="inbox-person-actions-default">🎖&nbsp;&nbsp;Gerrard Manning <span xmlns="http://www.w3.org/1999/xhtml" data-ix="hide-initial-100-opacity" className="job-title-inbox">1h ago, Facebook, Marketing Head</span>
                <br/>
                </span>
                <br/><span className="see-more" data-ix="show-inbox-block-2">See more...</span>
              </div>
              <div className="inbox-block-2" data-ix="inbox-block-2-special"><span className="temp-large">Quick, high impact emails:</span>
                <br/>
                <br/>Reply to these 4 new leads <span className="red">asap</span>. (?)
                <br/><span className="person-inbox">🌱&nbsp;&nbsp;Jacob Frost <span className="job-title-inbox">(Yesterday)</span></span>
                <br/><span className="person-inbox">🌱&nbsp;&nbsp;Mary Shelley <span className="job-title-inbox">(24m ago)</span>
                <br/>
                </span><span className="person-inbox">🌱&nbsp;&nbsp;Spencer Johnson <span className="job-title-inbox">(13m ago)</span>
                <br/>
                </span><span className="person-inbox">🌱&nbsp;&nbsp;William Tindale <span className="job-title-inbox">(7m ago)</span>
                <br/>
                </span>
                <br/>Reply to 3 people re calls / meetings <span className="red">asap.</span> (?)
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">📅 &nbsp;Max Steel <span data-ix="hide-initial-100-opacity" className="job-title-inbox">(wants 3pm next Wed)</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">📅&nbsp;&nbsp;Matthew Pearson <span data-ix="hide-initial-100-opacity" className="job-title-inbox">(wants coffee next week)</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">📅 &nbsp;Bobby Robertson <span data-ix="hide-initial-100-opacity" className="job-title-inbox">(needs pushing along)</span></span>
                <br/>
                <br/>Send 1 thank you / next steps note <span className="red">asap.</span> (?)
                <br/><span className="person-inbox">❤️&nbsp;&nbsp;James Butterworth&nbsp;<span className="job-title-inbox">Dismiss (meeting 1d ago)</span></span>
                <br/>
                <br/>
                <br/><span className="temp-large">Other contacts to reply to:</span>
                <br/>
                <br/>Reply to 6 more leads when you have time.
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default-2">💰&nbsp;&nbsp;James Brown <span data-ix="hide-initial-100-opacity">2h ago, Company.com, HR Manager</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰 &nbsp;Peter Ewlett <span data-ix="hide-initial-100-opacity">J&amp;K, Executive Recruiter</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;David Johnson <span data-ix="hide-initial-100-opacity">Company.com, Sales Dr.</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;Anthony Garter <span data-ix="hide-initial-100-opacity">Birckbeck, HR Manager</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;Bobby Robertson <span data-ix="hide-initial-100-opacity">PearTree, Director</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;Eddie Watkins <span data-ix="hide-initial-100-opacity">Hyperion, Associate</span></span>
                <br/>
                <br/>
                <br/><span className="temp-large">Contacts to chase:</span>
                <br/>
                <br/>These 8 people haven't replied - send chasers?
                <br/><span className="person-inbox">⏱&nbsp; Jo Chambers <span>3 days</span></span>
                <br/><span className="person-inbox">⏱ &nbsp;Ann Barley <span>3 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Ben Alexander <span>3 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Anil Nainan <span>4 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Serena Smith <span>4 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Thomas Freeman <span>5 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Eden Fray <span>6 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Owais Cummings <span>2 weeks</span></span>
                <br/>
                <br/>These 3 people haven't replied twice - send chasers?
                <br/><span className="person-inbox">⏱&nbsp; John Raffety <span>5 days</span></span>
                <br/><span className="person-inbox">⏱ &nbsp;Nina Heida <span>5 days</span></span>
                <br/><span className="person-inbox">⏱ &nbsp;Timo Scharla <span>6 days</span>
                <br/>
                </span>
                <br/>This 1 person hasn't replied three times - send chaser?
                <br/><span className="person-inbox">⏱ &nbsp;Yuri Fechnay <span>6 days</span></span>
                <br/>
                <br/>
                <br/><span className="temp-large">Inbox zero tasks:</span>
                <br/>
                <br/>Still got time? Let's get you to Inbox Zero!
                <br/><span className="person-inbox">🚑&nbsp; &nbsp;Archive these 7 notification emails.</span>
                <br/><span className="person-inbox">🚑&nbsp; &nbsp;Archive these 16 promo emails.</span>
                <br/><span className="person-inbox">🚑&nbsp;&nbsp;&nbsp;Archive these 47 emails from last week and older.</span>
                <br/><span className="person-inbox">🚑 &nbsp; Can I unsubscribe you from these 132 newsletters?</span>
              </div>
              <div className="add-people-block" data-ix="inbox-block-2-special"><span className="temp-large">Add people to Teal:</span>
                <br/>
                <br/>These people recently messaged you: (?)
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">🤔 &nbsp;Alex Tall <span className="job-title-inbox" data-ix="hide-initial-100-opacity"><span className="add-to-drafter">Add to Drafter</span> | <span className="ignore">Ignore</span></span>
                </span>
                <br/><span><span className="person-inbox" data-ix="inbox-person-actions-default">🤔 &nbsp;Lilly Kane <span className="job-title-inbox" data-ix="hide-initial-100-opacity"><span className="add-to-drafter">Add to Drafter</span> | <span className="ignore">Ignore</span></span>
                </span>
                </span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">🤔 &nbsp;Muhammed Kumar<span className="job-title-inbox" data-ix="hide-initial-100-opacity">&nbsp;<span className="add-to-drafter">Add to Drafter</span> | <span className="ignore">Ignore</span></span>
                </span>
              </div>
              <div className="spacer-100"></div>
              <div className="trigger-inbox-2" data-ix="show-inbox-block-2"></div>
            </div>
            <div className="v2">
              <div className="inbox-header-holder">
                <img className="inbox-image" sizes="68.234375px" src="img/Teal-Logo-outline.png" srcset="images/Teal-Logo-outline-p-500x733.png 500w, images/Teal-Logo-outline-p-800x1173.png 800w, images/Teal-Logo-outline-p-1080x1583.png 1080w, images/Teal-Logo-outline-p-1600x2345.png 1600w, images/Teal-Logo-outline.png 1944w"/>
                <div className="search-block"></div>
              </div>
              <div className="inbox-block"><span className="hello">Alex</span><span className="hello2">, good morning.</span>
                <br/>
                <br/>Let's get you through your emails.
                <br/>I've prioritised what I think you need to do below.</div>
              <div className="var vip-block">Reply to these 3 VIP contacts <span className="red">asap</span>. (?)
                <br/>
                <Link to="/home/email/123">
                    <span className="person-inbox" data-ix="inbox-person-actions-default"> 🎖&nbsp;&nbsp;John Pritchard <span data-ix="hide-initial-100-opacity" className="job-title-inbox">2m ago, Unilever, Head of Sales USA</span></span>
                </Link>
                <br/>
                <Link to="/home/email/12345">
                    <span className="person-inbox" data-ix="inbox-person-actions-default-2">🎖&nbsp;&nbsp;Oliver Jones <span xmlns="http://www.w3.org/1999/xhtml" data-ix="hide-initial-100-opacity" className="job-title-inbox">17m ago, Samsung, CMO</span></span>
                </Link>
                <br/>
                <span className="person-inbox" data-ix="inbox-person-actions-default">🎖&nbsp;&nbsp;Gerrard Manning&nbsp;<span xmlns="http://www.w3.org/1999/xhtml" data-ix="hide-initial-100-opacity" className="job-title-inbox">1h&nbsp;ago,&nbsp;Facebook,&nbsp;Marketing</span></span>
              </div>
              <div className="inbox-block-2 var">Reply to these 4 new leads <span className="red">asap</span>. (?)
                <br/><span className="person-inbox">🌱&nbsp;&nbsp;Jacob Frost <span className="job-title-inbox">(Yesterday)&nbsp;</span></span>
                <br/><span className="person-inbox">🌱&nbsp;&nbsp;Mary Shelley <span className="job-title-inbox">(24m ago)&nbsp;</span>
                <br/>
                </span><span className="person-inbox">🌱&nbsp;&nbsp;Spencer Johnson <span className="job-title-inbox">(13m ago)&nbsp;</span>
                <br/>
                </span><span className="person-inbox">🌱&nbsp;&nbsp;William Tindale <span className="job-title-inbox">(7m ago)&nbsp;</span></span>
                <br/>Reply to 3 people re calls / meetings <span className="red">asap.</span> (?)
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">📅 &nbsp;Max Steel <span data-ix="hide-initial-100-opacity" className="job-title-inbox">(wants 3pm next Wed)</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">📅&nbsp;&nbsp;Matthew Pearson <span data-ix="hide-initial-100-opacity" className="job-title-inbox">(wants coffee next week)</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">📅 &nbsp;Bobby Robertson <span data-ix="hide-initial-100-opacity" className="job-title-inbox">(needs pushing along)</span></span>
                <br/>Send 1 thank you / next steps note <span className="red">asap.</span> (?)
                <br/><span className="person-inbox">❤️&nbsp;&nbsp;James Butterworth&nbsp;<span className="job-title-inbox">Dismiss (meeting 1d ago)</span></span>
                <br/>Reply to 6 more leads when you have time.
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default-2">💰&nbsp;&nbsp;James Brown <span data-ix="hide-initial-100-opacity" className="job-title-inbox">2h ago, Company.com, HR Manager</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰 &nbsp;Peter Ewlett <span data-ix="hide-initial-100-opacity" className="job-title-inbox">J&amp;K, Executive Recruiter</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;David Johnson <span data-ix="hide-initial-100-opacity" className="job-title-inbox">Company.com, Sales Dr.</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;Anthony Garter <span data-ix="hide-initial-100-opacity" className="job-title-inbox">Birckbeck, HR Manager</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;Bobby Robertson <span data-ix="hide-initial-100-opacity" className="job-title-inbox">PearTree, Director</span></span>
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">💰&nbsp;&nbsp;Eddie Watkins <span data-ix="hide-initial-100-opacity" className="job-title-inbox">Hyperion, Associate</span></span>
                <br/>
                <br/><span className="temp-large">Contacts to chase:</span>
                <br/>These 8 people haven't replied - send chasers?
                <br/><span className="person-inbox">⏱&nbsp; Jo Chambers <span>3 days</span></span>
                <br/><span className="person-inbox">⏱ &nbsp;Ann Barley <span>3 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Ben Alexander <span>3 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Anil Nainan <span>4 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Serena Smith <span>4 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Thomas Freeman <span>5 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Eden Fray <span>6 days</span>
                <br/>
                </span><span className="person-inbox">⏱ &nbsp;Owais Cummings <span>2 weeks</span></span>
                <br/>These 3 people haven't replied twice - send chasers?
                <br/><span className="person-inbox">⏱&nbsp; John Raffety <span>5 days</span></span>
                <br/><span className="person-inbox">⏱ &nbsp;Nina Heida <span>5 days</span></span>
                <br/><span className="person-inbox">⏱ &nbsp;Timo Scharla <span>6 days</span></span>
                <br/>This 1 person hasn't replied three times - send chaser?
                <br/><span className="person-inbox">⏱ &nbsp;Yuri Fechnay <span>6 days</span></span>
                <br/><span className="temp-large"><br/>Inbox Zero</span>
                <br/>Still got time? Let's get you to Inbox Zero!
                <br/><span className="person-inbox">🚑&nbsp; &nbsp;Archive these 7 notification emails.</span>
                <br/><span className="person-inbox">🚑&nbsp; &nbsp;Archive these 16 promo emails.</span>
                <br/><span className="person-inbox">🚑&nbsp;&nbsp;&nbsp;Archive these 47 emails from last week and older.</span>
                <br/><span className="person-inbox">🚑 &nbsp; May I unsubscribe you from these 97 newsletters?</span>
              </div>
              <div className="spacer-100"></div>
              <div className="spacer"></div>
              <div className="add-people-block" data-ix="show-more-people-to-add"><span className="temp-large">Add people to Teal:</span>
                <br/>These people recently messaged you: (?)
                <br/><span className="person-inbox" data-ix="inbox-person-actions-default">🤔 &nbsp;Alex Tall <span className="job-title-inbox"><span className="add-to-drafter">Add to Drafter</span> | <span className="ignore">Ignore</span></span>
                </span>
                <br/><span><span className="person-inbox" data-ix="inbox-person-actions-default">🤔 &nbsp;Lilly Kane <span className="job-title-inbox"><span className="add-to-drafter">Add to Drafter</span> | <span className="ignore">Ignore</span></span>
                </span>
                </span>
                <br/><span className="person-inbox">🤔 &nbsp;Muhammed Kumar<span className="job-title-inbox">&nbsp;<span xmlns="http://www.w3.org/1999/xhtml" className="add-to-drafter"><span className="add-to-drafter">Add to Drafter</span></span> | <span xmlns="http://www.w3.org/1999/xhtml">Ignore</span></span><span xmlns="http://www.w3.org/1999/xhtml" className="ignore"></span></span><span><br/></span><span className="see-more-people-to-add" data-ix="show-more-people-to-add">See more...</span>
              </div>
              <div className="trigger-inbox-2" data-ix="show-inbox-block-2"></div>
            </div>
          </div>
        </div>
    );
};