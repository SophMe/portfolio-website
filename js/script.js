//start IIFE
(function() {
	let form = document.querySelector('.contact-form');
	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	function showErrorMessage(input, message) {
		let container = input.parentElement;
		let error = container.querySelector('.error-message');
		if (error) {
			container.removeChild(error);
		}
		if (message) {
			let error = document.createElement('div');
			error.classList.add('error-message');
			error.innerText = message;
			container.appendChild(error);
		}
	}

	function validateEmail() {
		let value = emailInput.value;
		if (!value) {
			showErrorMessage(emailInput, 'Email is a required field.');
			return false;
		}
		if (value.indexOf('@') === -1) {
			showErrorMessage(emailInput, 'Please enter a valid email address.');
			return false;
		}
		if (value.indexOf('.') === -1) {
			showErrorMessage(emailInput, 'Please enter a valid email address.');
			return false;
		}
		showErrorMessage(emailInput, null);
		return true;
	}

	function validateMessage() {
		let value = messageInput.value;
		if (!value) {
			showErrorMessage(messageInput, 'Message is a required field.');
			return false;
		}
	}

	function validateForm() {
	    let isValidEmail = validateEmail();
	    let hasMessage = validateMessage();
	    return isValidEmail && hasMessage;
	}

	// form.addEventListener('submit'), (e) => {
	// 	e.preventDefault();
	// 	if (validateForm()) {
	// 		alert('Success!');
	// 	}
	// }

	emailInput.addEventListener('input', validateEmail);
	messageInput.addEventListener('input', validateMessage);

})();

