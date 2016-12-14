export const sendEmail = (text, activeEmail) => {



	// send to API and wait for answer
	// dispatch SUCCESS or FAILURE action and remove email from list on success

	return {
		type: 'SEND_EMAIL',
		text,
		activeEmail
	};
};


export const changeEmailContent = (emailContent) => {
	return {
		type: 'CHANGE_EMAIL',
		emailMsg: { text: emailContent }

	};
};