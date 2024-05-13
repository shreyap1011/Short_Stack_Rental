export default function validateUsername(username) {
    // Check length
    if (username.length < 3 || username.length > 20) {
        return false;
    }

    // Check allowed characters (letters, numbers, underscores, and hyphens)
    const validCharacters = /^[a-zA-Z0-9_-]+$/;
    if (!validCharacters.test(username)) {
        return false;
    }

    // Additional validation if needed

    return true;
}