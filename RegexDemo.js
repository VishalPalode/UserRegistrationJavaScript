var regex = require('./helper');

let name = regex.nameRegex.test("Vishal")
console.log("Name is : ", name);

let contact = regex.contactRegex.test("+919168031413")
console.log("Contact is : ", contact);

let email = regex.emailRegex.test("vishalpalode9899@gmail.com")
console.log("Email is : ", email);

let password = passwordRegex.test("Vishal%0908")
console.log("Password is : ", password)