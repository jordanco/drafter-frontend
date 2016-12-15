import { dismissEmail } from '../email-unreplied/list';

export const sendEmail = (text, activeEmail) => {

 	// CREATE EMAIL OBJECT FOR SENDING
 	let currentEmail = activeEmail[0];
 	let emailForSending = {
 		'to': currentEmail.from,
 		'subject': currentEmail.subject
 	}

	return dispatch => {
		dispatch(sendEmailRequest(currentEmail.id))

		// API

		// INSIDE
		let success = true;

		if(success){
			setTimeout(function() {
				dispatch(emailSentSuccess(currentEmail.id))
				dispatch(dismissEmail(currentEmail.id))	
			},  3000);
		} else {
			setTimeout(function() {
				dispatch(emailSentError(currentEmail.id))	
			}, 3000);
		}

	}

};


export const changeEmailContent = (emailContent) => {
	return {
		type: 'CHANGE_EMAIL',
		emailMsg: { text: emailContent }

	};
};

export const emailSentSuccess = () => {
	return {
		type: 'EMAIL_SENT_SUCCESS'
	};
};

export const sendEmailRequest = (id) => {
	return {
		type: 'EMAIL_SENDING'
	};
};

export const emailSentError = (id) => {
	return {
		type: 'EMAIL_SENT_ERROR'
	};
};