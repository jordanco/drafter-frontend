const ListAction =  (state = {}, action) => {
	
	switch (action.type) {
		case 'DISMISS_EMAIL':
			alert("Dismiss email with id: "+action.id);
			return {
				...state,
				id: action.id
			}

		default:
			return state
	}
}
