////////////////////////////-- CONTACT ME --///////////////////////////////!SECTION

const contactForm = document.getElementById("contact_form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const formName = form.name.value.trimEnd().trimStart();
    const formEmail = form.email.value.trimEnd().trimStart();
    const formMessage = form.message.value;

    if (!validateForm(formName, formEmail, formMessage)) return;

    form.name.value = '';
    form.email.value = '';
    form.message.value = '';

    const alerta =
    `
        Nombre: ${formName}
        Correo: ${formEmail}

        Solicitud:
        ${formMessage}

        Su solicitud ha sido enviada.
    `;

    alert(alerta);
})

function validateForm(name, email, message) {
    // Verificar campos vacios
    if (!name || !email || !message) {
        alert("Debe rellenar todos los campos.");
        return false
    }

    // Validacion del nombre
    if (!validateName(name)) return false;

    // Validacion del Correo
    if (!validateEmail(email)) return false;

    return true;
}

function validateName(name) {
    // Verificar si contiene caracteres especiales
    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (format.test(name)) {
        alert("El nombre no debe contener caracteres especiales.");
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email.includes(" ")) {
        alert("El correo no debe tener espacios en blanco.")
        return false;
    }

    if (!email.includes("@")) {
        alert("Debe ser un correo válido.")
        return false;
    }
    return true;
}
