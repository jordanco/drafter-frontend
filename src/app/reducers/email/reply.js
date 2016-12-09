export default function emailMsg(state = {}, action) {

    switch(action.type) {
        case 'CHANGE_EMAIL' : { 

          console.log('Reducer change email', state, "action: ", action);
          return action.emailMsg
        }
        case 'SEND_EMAIL' : { 

          console.log('Reducer SEND_EMAIL email', state, "action: ", action);// state is the current textarea value
          alert(state)

          return state;
        }  
        default : return state;
    }
}

