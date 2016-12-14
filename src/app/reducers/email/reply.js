const currentMsgs = {
  "subject": "Test Subject",
  "from": "Test from"
};

export default function emailMsg(state = {}, action) {

    switch(action.type) {
        case 'CHANGE_EMAIL' : { 
          return { text: action.emailMsg.text,
                    showSuccessMsg: false,
                    showErrorMsg: false,
          };
        }
        case 'SEND_EMAIL' : { 

          console.log('Reducer SEND_EMAIL email', state, "action: ", action);
          // treath msg in action.currentMsg
          alert(action.text);
          return { 
            text:action.text, 
            showSuccessMsg: true,
            showErrorMsg: false
          };
        }  
        default : return state;
    }
}

