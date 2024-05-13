export default function validatePassword(password) {
    // Check length
    if (password.length < 8) {
        return false;
    }

    // Check complexity (uppercase, lowercase, numbers, special characters)
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!(hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter)) {
        return false;
    }

    // Additional validation if needed

    return true;
}