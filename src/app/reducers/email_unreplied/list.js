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
        ],
        activeEmail: {}
    
}
export default function list(state = testMessages, action) {

    switch(action.type) {
        case 'SET_ACTIVE_EMAIL': 
            let emailFound = state.messages_unreplied.filter(function(email){
                if(email.id==action.id){
                    return email;
                };
            });

            return {...state, activeEmail: emailFound};
            
        case 'DISMISS_EMAIL' : { 

            const messagesUnrepliedNewState = state.messages_unreplied.filter(function(email){
                if(email.id!=action.id){
                  return email;
                }
            });

            return {...state, messages_unreplied:messagesUnrepliedNewState};
        } 
        default : return state;
    }
}