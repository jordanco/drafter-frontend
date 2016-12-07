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