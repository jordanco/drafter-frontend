import React, { PropTypes } from 'react'

const Info = ({ sender }) => (
    <div className="profile">
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
          <div className="name-big">{ sender.name }</div>
        </div>
    </div>
)

// Todo.propTypes =

export default Info