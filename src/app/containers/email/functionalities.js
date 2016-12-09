import { connect } from 'react-redux';
import EmailReply from '../../components/email/reply';
import { sendEmail, changeEmailContent } from '../../actions/email/reply';



const mapStateToProps = (state) => {
    console.log("Current state: ", state);
    return {
        emailMsg: ''
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onTemplatesClick: () => {
            console.log("hello there");
            //dispatch(sendEmail())
        },
        onOpenGmailClick: () => {
            console.log("hello there1");
            //dispatch(sendEmail())
        },
        onOtherClick: () => {
            console.log("hello there2");
            //dispatch(sendEmail())
        },
        onSnoozeClick: () => {
            console.log("hello there3");
            //dispatch(sendEmail())
        },
        onSendClick: () => {
            console.log("props: ");
            // console.log("hello there4");
             dispatch(sendEmail())
        },
        onEmailChange: (event) => {
            console.log("email change", event.target.value);
            dispatch(changeEmailContent(event.target.value))
            
        }

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailReply)