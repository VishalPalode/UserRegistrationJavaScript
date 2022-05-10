function contactRegex(str){
    var re = (/^[+91]\d{10}$/);
console.log(re.test(str));
}
contactRegex("+919168031413")