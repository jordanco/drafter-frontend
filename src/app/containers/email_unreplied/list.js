import { connect } from 'react-redux'
import List from '../../components/email_unreplied/list'

console.log(List);

const testMessages = {
    messages_unreplied: {  
        'today':[ 
            {
                "id": "528628",
                "timestamp" : "1480341978000",
                "from" : {
                    "emailAddress" : "jane@test.com",

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
        'yesterday':[ 
            {
                "id": "528628",
                "timestamp" : "1480341978000",
                "from" : {
                    "emailAddress" : "jane@test.com",
                    "name" : "Jane Doe 1"
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
                    "name" : "Chris Smith 1"
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
    },
    
}

const getList = (messages_unreplied = testMessages.messages_unreplied,filter) => {

    return messages_unreplied[filter];

}


const mapStateToProps = (state, {filter,title}) => {
    return {
        messages_unreplied: getList(state.messages_unreplied,filter),
        title: title
    }
}


const mapDispatchToProps = (dispatch) => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(List)