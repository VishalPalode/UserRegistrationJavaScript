function nameRegex(str) {
    var Regex =(/^[A-Z][a-z]{3,}$/);
    console.log(Regex.test(str));
}
nameRegex("Vishal")