import { connect } from 'react-redux';
import List from '../../components/email_unreplied/list';
import { dismissEmail } from '../../actions/email-unreplied/list';

const testMessages = {
    messages_unreplied: [ 
        {
            "id": 528628,
            "timestamp" : 1481286705764,
            "from" : {
                "emailAddress" : "jane1@test.com",

            },
            "when": "today",
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
            "id": 123456,
            "timestamp" : 1481286721005,
            "from" : {
                "emailAddress" : "jane2@test.com",

            },
            "when": "today",
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
            "id": 654321,
            "timestamp" : 1481286734466,
            "from" : {
                "emailAddress" : "jane3@test.com",

            },
            "when": "today",
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
            "id": 678912,
            "timestamp" : 1481286747828,
            "from" : {
                "emailAddress" : "jane4@test.com",

            },
            "when": "yesterday",
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
            "id": 2582581,
            "timestamp" : 1481059813488,
            "from" : {
                "emailAddress" : "chris.smith@test.com",
                "name" : "Chris Smith"
            },
            "when": "yesterday",
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
        },
        {
            "id": 345678,
            "timestamp" : 1481059813159,
            "from" : {
                "emailAddress" : "jane@test.com",
                "name" : "Jane Doe 1"
            },
            "when": "yesterday",
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
            "id": 2582582,
            "timestamp" : 1481059812159,
            "from" : {
                "emailAddress" : "chris.smith@test.com",
                "name" : "Chris Smith 1"
            },
            "when": "yesterday",
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
        ]
    
}


const getList = (messages_unreplied = testMessages.messages_unreplied, filter) => {

    let daysDiffCount = 0;
    if(filter==="today"){
        daysDiffCount = 4;
    } else if (filter==="yesterday"){
        daysDiffCount = 7; // 3 is not the right days difference, but its here because of the static data we are working with
    }

    let dateNow = new Date().getTime();


    if(messages_unreplied.length>0){

        let groupedMsgs = messages_unreplied.filter(function(email){

            var timeDiff = dateNow - email.timestamp;
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
            if(diffDays === daysDiffCount){ 
                return email;
            }
        });

        return groupedMsgs;
    } else {

        let groupedMsgs = testMessages.messages_unreplied.filter(function(email){

            var timeDiff = dateNow - email.timestamp;
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
            if(diffDays === daysDiffCount){ 
                return email;
            }
        });

        return groupedMsgs;
    }

    

}

const mapStateToProps = (state, {filter}) => {
    return {
        messages_unreplied: getList(state.messages_unreplied,filter)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDismissClick: (id) => {
            dispatch(dismissEmail(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)