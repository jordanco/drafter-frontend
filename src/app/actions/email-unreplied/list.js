import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';

export const dismissEmail = (id) => {
	return {
		type: 'DISMISS_EMAIL',
		id
	}
	

};

export const setActiveEmail = (id) => {
	return {
		type: 'SET_ACTIVE_EMAIL',
		id
	};
};
