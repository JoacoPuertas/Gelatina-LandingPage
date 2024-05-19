document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const email = form.querySelector('input[type="email"]');
        const boton = form.querySelector('button[type="submit"], input[type="submit"]');
        const resultado = form.querySelector('.resultado');

        boton.addEventListener("click", (e) => {
            e.preventDefault(); // Para que no se reinicie la pagina
            let error = validarCampos(email);
            if (error[0]) {
                resultado.innerHTML = error[1];
                resultado.classList.add("red");
                resultado.classList.remove("green");
            } else {
                // resultado.innerHTML = `¡Gracias! El código de descuento se ha enviado a ${email.value}`;
                // resultado.classList.add("green");
                // resultado.classList.remove("red");
                // Aca en realidad habria que activar el popup. Pero me da muchisima paja hacerlo ahora abz
                resultado.remove("red");
                boton.setAttribute("data-bs-toggle", "modal");
                boton.setAttribute("data-bs-target", "#exampleModal");
            }
        });
    });

    const validarCampos = (email) => {
        let error = [false, ""];
        if (email.value.length < 5 || 
            email.value.length > 40 || 
            email.value.indexOf("@") === -1 || 
            email.value.indexOf(".") === -1) {
            error[0] = true;
            error[1] = "El email es invalido";
            return error;
        }
        return error;
    }
});
