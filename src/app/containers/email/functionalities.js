import React, { Component } from 'react';
import { connect } from 'react-redux';
//import EmailReply from '../../components/email/reply';
import { sendEmail, changeEmailContent } from '../../actions/email/reply';


class EmailReply extends Component {

    onEmailChange(event) {
        this.props.onEmailChange(event.target.value);
    }
    onEmailSend(event){
        this.props.onSendClick(this.props.emailMsg, this.props.currentMsgs);
    }

  render() {
    return (
       <div className="editor">
           <div className="typebox">
               <div className="w-form">
                   <form data-name="Email Form" id="email-form" name="email-form">
                        <textarea className="textatea w-input" onChange={ this.onEmailChange.bind(this) } value={ this.props.emailMsg } data-ix="show-suggestions" id="field" maxlength="5000" name="field" placeholder="Type response here" ></textarea>
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
                <div className="connect-button" onClick={ this.onEmailSend.bind(this) }>
                    <img className="li-connect-image" src="https://d3e54v103j8qbb.cloudfront.net/img/image-placeholder.svg"/>
                    <div>Send</div>
                </div>
           </div>
       </div>
    );
  }

}


const mapStateToProps = (state) => {
    return {
        emailMsg: state.emailMsg,
        messages_unreplied: state.messages_unreplied,
        currentMsgs: []
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onTemplatesClick: () => {},
        onOpenGmailClick: () => {},
        onOtherClick: () => {},
        onSnoozeClick: () => {},
        onSendClick: (text, currentMsgs) => {
            dispatch(sendEmail(text))
        },
        onEmailChange: (text) => {
            dispatch(changeEmailContent(text)) 
        }

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailReply)