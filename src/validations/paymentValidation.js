// /src/validations/paymentValidation.js

// Validate credit card number using Luhn algorithm
function validateCreditCardNumber(cardNumber) {
    const sanitizedCardNumber = cardNumber.replace(/\D/g, ''); // Remove non-numeric characters

    if (!/^\d{13,19}$/.test(sanitizedCardNumber)) {
        return false;
    }

    let sum = 0;
    let doubleDigit = false;

    for (let i = sanitizedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedCardNumber[i], 10);

        if (doubleDigit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        doubleDigit = !doubleDigit;
    }

    return sum % 10 === 0;
}

// Validate expiration date of the credit card
function validateExpirationDate(expirationDate) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Month is 0-based

    const [inputYear, inputMonth] = expirationDate.split('/').map(str => parseInt(str, 10));

    return (
        inputYear > currentYear ||
        (inputYear === currentYear && inputMonth >= currentMonth)
    );
}

// Validate CVV (Card Verification Value)
function validateCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
}

export { validateCreditCardNumber, validateExpirationDate, validateCVV };
