export default function emailMsg(state = {}, action) {

  switch(action.type) {
    case 'CHANGE_EMAIL' : { 
      return { 
        text: action.emailMsg.text,
        showSuccessMsg: false,
        showErrorMsg: false,
        showLoader: false
      };
    }
    case 'EMAIL_SENDING': {
      return { 
        showLoader: true
      };

    }
    case 'EMAIL_SENT_SUCCESS': {
      return { 
        showSuccessMsg: true,
        showLoader: false
      };

    }
    case 'EMAIL_SENT_ERROR': {
      return { 
        showErrorMsg: true,
        showLoader: false
      };

    }
    default : return state;
  }
}