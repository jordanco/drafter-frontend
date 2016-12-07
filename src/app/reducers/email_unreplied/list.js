let INIT_STATE = {
    messages_unreplied: {  
        'today':[ 
        {
            "id": "528628",
            "timestamp" : "1481034413488",
            "from" : {
                "emailAddress" : "jane@test.com",

            },
            "show": false,
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
            "id": "123456",
            "timestamp" : "1481034413488",
            "from" : {
                "emailAddress" : "jane@test.com",

            },
            "show": true,
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
            "id": "654321",
            "timestamp" : "1481034413488",
            "from" : {
                "emailAddress" : "jane@test.com",

            },
            "show": true,
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
            "id": "678912",
            "timestamp" : "1481034413488",
            "from" : {
                "emailAddress" : "jane@test.com",

            },
            "show": true,
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
            "timestamp" : "1481059813488",
            "from" : {
                "emailAddress" : "chris.smith@test.com",
                "name" : "Chris Smith"
            },
            "show": false,
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
            "id": "345678",
            "timestamp" : "1481059813159",
            "from" : {
                "emailAddress" : "jane@test.com",
                "name" : "Jane Doe 1"
            },
            "show": true,
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
            "timestamp" : "1481059812159",
            "from" : {
                "emailAddress" : "chris.smith@test.com",
                "name" : "Chris Smith 1"
            },
            "show": true,
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
    
};
const ListAction =  (state, action) => {
  
  switch (action.type) {
    case 'DISMISS_EMAIL':
      alert("Dismiss email with id: "+action.id);
      return {
        ...state,
        id: action.id,
        show: false

      }

    default:
      return state
  }
}


const list = (state = {}, action) => {
 
  switch (action.type) {

    case 'DISMISS_EMAIL':

      return [
        ...state,
        ListAction(state, action)
      ]


    default:
      return state
  }
}

export default list