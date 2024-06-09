const nombre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const paragraph = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    paragraph.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(password.value.length <8){
        warnings += `La contraseña no es válida <br>`
        entrar = true
    }
    if(entrar){
        paragraph.innerHTML = warnings
    }else{
        paragraph.innerHTML = "Enviado"
    }
});