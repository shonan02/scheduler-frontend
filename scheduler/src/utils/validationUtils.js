export const validateUsername  = (username) => {
    return username.length >= 4 && username.length <= 30;
}

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{7,30}$/;
    return passwordRegex.test(password);
}
