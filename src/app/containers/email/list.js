import { connect } from 'react-redux';
import List from '../../components/email/list';
import sendEmail from '../../actions/email/reply';

console.log(List);

const testMessages = {
    filter: 'LIST_ALL',
    messages:  [ 
        {
            "id": "ID MUST BE SET MESSAGES 1",
            "timestamp" : 1480952815732,
            "from" : {
                "emailAddress" : "jane@test.com",
                "name" : "Jane Doe"
            },
            "inbound" : false,
            "subject" : "Quick Call",
            
            "body" : {
                "whole" : "Hi Chris,\nGot a minute to chat about what happens to employee options on a sale?\n\n  \n\n\nJane\n",
                "body" : "Got a minute to chat about what happens to employee options on a sale?\n\n  \n\n\nJane",
                "greeting" : "Hi Chris,",
                "signature" : "--   \n\n\nJane Doe | Chief Executive Officer | XCorp",
                "signoff" : ""
            }
            
        
        },
        {
            "id": "ID MUST BE SET MESSAGES 2",
            "timestamp" : 1480346277000,
            "from" : {
                "emailAddress" : "chris.smith@test.com",
                "name" : "Chris Smith"
            },
            "inbound" : true,
            "subject" : "RE: Quick Call",
            
            "body" : {
                "whole" : "\nYes - am free until 3.30.\n\nC.\n",
                "body" : "Yes - am free until 3.30.\n\nC.",
                "greeting" : "",
                "signature" : null,
                "signoff" : ""
            }
        } 
    ],
    thread_message: {  
        "subject" : "This is another test",
        "timestamp" : "1480341978000",
        "sender" : {
            "emailAddress" : "jane@test.com",
            "name" : "Jane Doe"
        }
    }
}

const getList = (messages = testMessages.messages, filter) => {

    switch(filter){
        //  THIS SHOULD BE IN CONST LIKE ACTION NAMES
        case 'LIST_ALL':
        case 'LIST_THREAD':
        case 'LIST_CONTACT':
        case 'LIST_COMPANY':
        case 'LIST_PERSONAL':
        case 'LIST_TEAM':
        default:
            return messages
    }

}


const mapStateToProps = (state) => {
    console.log("Contailers email list changed: ", state);
    return {
        messages: getList(state.messages,state.filter)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSendClick: (id) => {
            dispatch(sendEmail(id))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)