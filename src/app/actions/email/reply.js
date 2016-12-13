export const sendEmail = (text, currentMsgs) => {
	return {
		type: 'SEND_EMAIL',
		text,
		currentMsgs
	};
};


export const changeEmailContent = (emailContent) => {
	return {
		type: 'CHANGE_EMAIL',
		emailMsg: emailContent

	};
};