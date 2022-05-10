function emailRegex(str){
    var regex = (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    console.log(regex.test(str));
}
emailRegex("vishalpalode9899@gmail.com")