import React, { PropTypes } from 'react'

const EmailReply = ({ onTemplatesClick, onOpenGmailClick, onOtherClick, onSnoozeClick, onSendClick, onEmailChange }) => (
 <div className="editor">
    <div className="typebox">
      <div className="w-form">
        <form data-name="Email Form" id="email-form" name="email-form" onSubmit={onOpenGmailClick}>
          <textarea className="textatea w-input" data-ix="show-suggestions" id="field" maxlength="5000" name="field" placeholder="Type response here" onChange={onEmailChange} ></textarea>

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
        <div onClick={onTemplatesClick}>Templates</div>
      </div>
      <div className="connect-button offset-2"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
        <div onClick={onOpenGmailClick}>Open in Gmail</div>
      </div>
      <div className="connect-button"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
        <div onClick={onOtherClick}>Other</div>
      </div>
      <div className="connect-button"><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
        <div onClick={onSnoozeClick}>Snooze</div>
      </div>
      <div className="connect-button" onClick={onSendClick}><img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
        <div>Send</div>
      </div>
    </div>
  </div>
);

EmailReply.propTypes = {
  onTemplatesClick: PropTypes.func.isRequired,
  onOpenGmailClick: PropTypes.func.isRequired,
  onOtherClick: PropTypes.func.isRequired,
  onSnoozeClick: PropTypes.func.isRequired,
  onSendClick: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired

}

// Todo.propTypes =

export default EmailReply