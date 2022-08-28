const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#input-error-firstName");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#input-error-lastName");

const email = document.querySelector("#email");
const emailError = document.querySelector("#input-error-email");

const phoneNumber = document.querySelector("#phoneNumber");
const phoneNumberError = document.querySelector("#input-error-phoneNumber");

const inputState = document.querySelector("#inputState");
const inputStateError = document.querySelector("#input-error-inputState");

const inputDistrict = document.querySelector("#inputDistrict");
const inputDistrictError = document.querySelector("#input-error-inputDistrict");

const pincode = document.querySelector("#pincode");
const pincodeError = document.querySelector("#input-error-pincode");

const address = document.querySelector("#address");
const addressError = document.querySelector("#input-error-address");

const amount = document.querySelector("#amount");
const amountError = document.querySelector("#input-error-amount");

const panNumber = document.querySelector("#panNumber");
const panNumberError = document.querySelector("#input-error-panNumber");

const terms = document.querySelector("#terms");
const termsError = document.querySelector("#input-error-terms");

const title = document.querySelector("#title");

const proceed = document.querySelector(".proceed");

terms.addEventListener("change", (e) => {
	if (e.target.checked) {
		termsError.innerHTML = "";
	}
});

const emailValidation = () => {
	let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (email.value.trim().match(mailFormat)) {
		emailError.innerHTML = "";
	} else {
		emailError.innerHTML = "This is an invalid email!";
	}
};

const phoneNumberValidation = () => {
	let mailFormat = /^[6-9]\d{9}$/;

	if (phoneNumber.value.trim().match(mailFormat)) {
		phoneNumberError.innerHTML = "";
	} else {
		phoneNumberError.innerHTML = "Enter a valid phone number!";
	}
};

const pinCodeValidation = () => {
	let mailFormat = /^[1-9][0-9]{5}$/;

	if (pincode.value.trim().match(mailFormat)) {
		pincodeError.innerHTML = "";
	} else {
		pincodeError.innerHTML = "Enter a valid PIN code!";
	}
};

const amountValidation = () => {
	let amountFormat = /^\d+$/;

	if (amount.value.trim().match(amountFormat)) {
		amountError.innerHTML = "";
	} else {
		amountError.innerHTML = "Donation amount should be in number";
	}
};

const panValidation = () => {
	let panNumberFormat = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

	if (panNumber.value.trim().match(panNumberFormat)) {
		panNumberError.innerHTML = "";
	} else {
		panNumberError.innerHTML = "Invalid PAN number!";
	}
};

const validateUserInputs = () => {
	let bool = false;

	if (firstName.value.trim() === "" || firstName.value === null) {
		bool = true;

		firstNameError.innerHTML = "First name is required to proceed!";
	} else {
		firstNameError.innerHTML = "";
	}

	if (lastName.value.trim() === "" || lastName.value === null) {
		bool = true;

		lastNameError.innerHTML = "Last name is required to proceed!";
	} else {
		lastNameError.innerHTML = "";
	}

	if (email.value.trim() === "" || email.value === null) {
		bool = true;

		emailError.innerHTML = "Email is required to proceed!";
	} else {
		emailError.innerHTML = "";
		emailValidation();
	}

	if (phoneNumber.value.trim() === "" || phoneNumber.value === null) {
		bool = true;

		phoneNumberError.innerHTML = "Phone number is required to proceed!";
	} else {
		phoneNumberError.innerHTML = "";
		phoneNumberValidation();
	}

	if (inputState.value.trim() === "" || inputState.value === null) {
		bool = true;

		inputStateError.innerHTML = "Please select your state to proceed!";
	} else {
		inputStateError.innerHTML = "";
	}

	if (inputDistrict.value.trim() === "" || inputDistrict.value === null) {
		bool = true;

		inputDistrictError.innerHTML = "Please select your district to proceed!";
	} else {
		inputDistrictError.innerHTML = "";
	}

	if (pincode.value.trim() === "" || pincode.value === null) {
		bool = true;

		pincodeError.innerHTML = "PIN code is required to proceed!";
	} else {
		pincodeError.innerHTML = "";
		pinCodeValidation();
	}

	if (address.value.trim() === "" || address.value === null) {
		bool = true;

		addressError.innerHTML = "Address is required to proceed!";
	} else {
		addressError.innerHTML = "";
	}

	if (amount.value.trim() === "" || amount.value === null) {
		bool = true;

		amountError.innerHTML = "Please enter the amount you want to donate!";
	} else {
		amountError.innerHTML = "";
		amountValidation();
	}

	if (panNumber.value.trim() === "" || panNumber.value === null) {
		bool = true;

		panNumberError.innerHTML = "Your PAN number is required to proceed!";
	} else {
		panNumberError.innerHTML = "";
		panValidation();
	}

	return bool;
};

const review = document.querySelector(".review-details");
const donation = document.querySelector(".donation");

const displayDetails = (userInputs) => {
	const values = document.querySelectorAll(".review-details-wrapper__value-p");

	let i = 0;

	for (const prop in userInputs) {
		values[i].innerHTML = userInputs[prop];
		i++;
	}

	donation.style.display = "none";
	review.style.display = "block";
};

proceed.addEventListener("click", (event) => {
	event.preventDefault();

	if (!terms.checked) {
		termsError.innerHTML =
			"You need to agree to our Terms and Conditions to proceed.";
		return;
	}

	if (validateUserInputs()) {
		return;
	}

	const fullName =
		title.value + " " + firstName.value.trim() + " " + lastName.value.trim();

	let userInputs = {
		name: fullName,
		email: email.value.trim(),
		phoneNumber: "+91 " + phoneNumber.value.trim(),
		state: inputState.value,
		district: inputDistrict.value,
		pinCode: pincode.value,
		address: address.value,
		amount: +amount.value,
		panNumber: panNumber.value.trim(),
	};

	displayDetails(userInputs);
});

const previous = document.querySelector(".previous-review");

previous.addEventListener("click", () => {
	review.style.display = "none";
	donation.style.display = "block";
});
