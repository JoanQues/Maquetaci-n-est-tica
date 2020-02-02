let form = document.querySelector("#signUp");
let isSignUp = false;
document.querySelector("h3").addEventListener('click', () => {
    if (!isSignUp){
        let email = document.createElement('input');
        let nombre = document.createElement('input');
        let apellidos = document.createElement('input');
        email.type = 'text';
        nombre.type = 'text';
        apellidos.type = 'text';
        email.placeholder = 'Email';
        nombre.placeholder = 'Nombre';
        apellidos.placeholder = 'Apellidos';
        form.appendChild(nombre);
        form.appendChild(apellidos);
        form.appendChild(email);
        isSignUp = !isSignUp;
    }
});