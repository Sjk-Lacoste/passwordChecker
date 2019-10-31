let validate = require('../passwordChecker');

describe("Password is valid", () => {
    let password = 'P@$sw0rd1';
    let valid = validate.passwordIsValid(password);

    it("Should check if the password is not empty", () => {
        expect(valid).not.toBeNull();
    });

    it("Should at least be 8 characters long", () => {
        expect(valid.split(' ').join('').length).toBeGreaterThan(8);
    });

    it("Should at least have one lowercase letter", () => {
        expect(valid).toMatch(/[a-z]/);
    });

    it("Should at least have one uppercase letter", () => {
        expect(valid).toMatch(/[A-Z]/);
    });

    it("Should at least have one digit", () => {
        expect(valid).toMatch(/^(?=.*\d)/);
    });

    it("Should at least have one special character", () => {
        expect(valid).toMatch(/[{(%$&*"'\|#@!)}]/);
    });
});


describe("Password is okay", () => {
    let password = 'P@$sw0rd1';
    let valid = validate.passwordIsValid(password);
    
    it("Should at least have one special character", () => {
        expect(valid).toMatch(/[{(%$&*"'\|#@!)}]/);
    });

    it("Should check if the password is not empty", () => {
        expect(valid).not.toBeNull();
    });

    it("Should at least be 8 characters long", () => {
        expect(valid.split(' ').join('').length).toBeGreaterThan(8);
    });
});