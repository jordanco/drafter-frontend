export const sendEmail = () => {
	console.log("send email click");
	return {
		type: 'SEND_EMAIL'
	};
};


export const changeEmailContent = (emailContent) => {
	console.log("changeEmailContent click");
	return {
		type: 'CHANGE_EMAIL',
		emailMsg: emailContent

	};
};