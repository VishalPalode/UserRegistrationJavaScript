function passwordRegex(str){
    var regex = (/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
    console.log(regex.test(str));
}
passwordRegex("Vishal#123")
