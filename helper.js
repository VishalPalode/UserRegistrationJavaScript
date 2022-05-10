module.exports={
    nameRegex: RegExp(/^[A-Z][a-z]{3,}$/),
    contactRegex: RegExp(/^[7-9][0-9]{9}$/),
    emailRegex: RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/),
    passwordRegex: RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
}
