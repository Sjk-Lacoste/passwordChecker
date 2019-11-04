'use strict';

function passwordIsValid (password) {
    try {

    	// Check if password exists
    	if() throw("Password cannot be empty");

    	// Check if password is atleast 8 characters long
    	if(password.length < 9) throw("Password should be at least 8 character long");

    	// Check if at least one lowercase letter exists
    	if(password.match(/[a-z]/g) == null) throw("Pasword should at least have one lowercase");

    	// Check if at least one uppercase letter exists
    	if(password.match(/[A-Z]/g) == null) throw("Pasword must at least have one uppercase");

    	// Check if at least one number exists
		if(password.match(/^(?=.*\d)/g) == null) throw("Password must at least have one number");

		// Check if at least one special character exists
		if(password.match(/[{(%$&*"'\|#@!)}]/g) == null) throw("Password should at least on special character, eg. { % & * ', etc");

    	return password;
    } catch(e) {
    	return e;
    }
}

function passwordIsOk(password) {
	try {
		if ((password == "") && (password.length < 9)) {

		}

		return true;
	} catch (err) {
		return err;
	}
}


module.exports = {
	passwordIsValid
};