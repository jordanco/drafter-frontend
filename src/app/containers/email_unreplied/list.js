import { connect } from 'react-redux'
import List from '../../components/email_unreplied/list'

console.log(List);

const testMessages = {
    filter: 'LIST_ALL',
    messages:  [ 
        {
            "id": "528628",
            "timestamp" : "1480341978000",
            "from" : {
                "emailAddress" : "jane@test.com",
                "name" : "Jane Doe"
            },
            "inbound" : false,
            "subject" : "Quick Call",
            "title" : "kate",
            
            "body" : {
                "whole" : "Hi Chris,\nGot a minute to chat about what happens to employee options on a sale?\n\n  \n\n\nJane\n",
                "body" : "Got a minute to chat about what happens to employee options on a sale?\n\n  \n\n\nJane",
                "greeting" : "Hi Chris,",
                "signature" : "--   \n\n\nJane Doe | Chief Executive Officer | XCorp",
                "signoff" : ""
            }
            
        
        },
        {
            "id": "2582582",
            "timestamp" : "1480346277000",
            "from" : {
                "emailAddress" : "chris.smith@test.com",
                "name" : "Chris Smith"
            },
            "inbound" : true,
            "subject" : "RE: Quick Call",
            "title" : "kate11",
            
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

const getList = (thread_message = testMessages.thread_message, messages = testMessages.messages, filter) => {

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
    return {
        messages: getList(state.messages,state.filter)
    }
}


const mapDispatchToProps = (dispatch) => {
  return {}
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)