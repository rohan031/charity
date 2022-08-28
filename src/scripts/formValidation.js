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

const review = document.querySelector(".review-details");
const donation = document.querySelector(".donation");
const loader = document.querySelector(".loader");

terms.addEventListener("change", (e) => {
	if (e.target.checked) {
		termsError.innerHTML = "";
	}
});

const emailValidation = () => {
	let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (email.value.trim().match(mailFormat)) {
		emailError.innerHTML = "";

		return false;
	} else {
		emailError.innerHTML = "This is an invalid email!";

		return true;
	}
};

const phoneNumberValidation = () => {
	let mailFormat = /^[6-9]\d{9}$/;

	if (phoneNumber.value.trim().match(mailFormat)) {
		phoneNumberError.innerHTML = "";

		return false;
	} else {
		phoneNumberError.innerHTML = "Enter a valid phone number!";

		return true;
	}
};

const pinCodeValidation = () => {
	let mailFormat = /^[1-9][0-9]{5}$/;

	if (pincode.value.trim().match(mailFormat)) {
		pincodeError.innerHTML = "";

		return false;
	} else {
		pincodeError.innerHTML = "Enter a valid PIN code!";

		return true;
	}
};

const amountValidation = () => {
	let amountFormat = /^\d+$/;

	if (amount.value.trim().match(amountFormat)) {
		amountError.innerHTML = "";

		return false;
	} else {
		amountError.innerHTML = "Donation amount should be in number";

		return true;
	}
};

const panValidation = () => {
	let panNumberFormat = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

	if (panNumber.value.trim().match(panNumberFormat)) {
		panNumberError.innerHTML = "";
		return false;
	} else {
		panNumberError.innerHTML = "Invalid PAN number!";
		return true;
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
		bool = emailValidation();
	}

	if (phoneNumber.value.trim() === "" || phoneNumber.value === null) {
		bool = true;

		phoneNumberError.innerHTML = "Phone number is required to proceed!";
	} else {
		phoneNumberError.innerHTML = "";
		bool = phoneNumberValidation();
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
		bool = pinCodeValidation();
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
		bool = amountValidation();
	}

	if (panNumber.value.trim() === "" || panNumber.value === null) {
		bool = true;

		panNumberError.innerHTML = "Your PAN number is required to proceed!";
	} else {
		panNumberError.innerHTML = "";
		bool = panValidation();
	}

	return bool;
};

const displayDetails = (userInputs) => {
	const values = document.querySelectorAll(".review-details-wrapper__value-p");

	let i = 0;

	for (const prop in userInputs) {
		values[i].innerHTML = userInputs[prop];
		i++;
	}

	// adding loader
	loader.style.display = "flex";
	wrapper.classList.add("loading");

	setTimeout(() => {
		donation.style.display = "none";

		// removing loader
		loader.style.display = "none";
		wrapper.classList.remove("loading");

		review.style.display = "block";
	}, 500);
};

let userInputs = {
	name: "",
	email: "",
	phoneNumber: "",
	state: "",
	district: "",
	pinCode: "",
	address: "",
	amount: "",
	panNumber: "",
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

	userInputs = {
		name: fullName,
		email: email.value.trim(),
		phoneNumber: "+91 " + phoneNumber.value.trim(),
		state: inputState.value,
		district: inputDistrict.value,
		pinCode: pincode.value,
		address: address.value,
		amount: "₹ " + +amount.value,
		panNumber: panNumber.value.trim(),
	};

	displayDetails(userInputs);
});

const previous = document.querySelector(".previous-review");
const proceedReview = document.querySelector(".proceed-review");

previous.addEventListener("click", () => {
	// adding loader
	loader.style.display = "flex";
	wrapper.classList.add("loading");

	setTimeout(() => {
		review.style.display = "none";

		// removing loader
		loader.style.display = "none";
		wrapper.classList.remove("loading");

		donation.style.display = "block";
	}, 500);
});

proceedReview.addEventListener("click", () => {
	// add code for donation link and saving user info to db
	// access userinfo using userInputs object at line 232
	// after proceeding from donation form all details will be there in the object
});
