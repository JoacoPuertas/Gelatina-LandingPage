document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const email = form.querySelector('input[type="email"]');
        const boton = form.querySelector('button[type="submit"], input[type="submit"]');
        const resultado = form.querySelector('.resultado');
        const modalEmail = document.querySelector('#exampleModal input[type="email"]');
        const obtenerFinal = document.querySelector('#exampleModal .obtener-final'); // Selecciona el botón dentro del modal

        boton.addEventListener("click", (e) => {
            e.preventDefault(); // Para que no se reinicie la página
            let error = validarCampos(email);
            if (error[0]) {
                resultado.innerHTML = error[1];
                resultado.classList.add("red");
                resultado.classList.remove("green");
            } else {
                modalEmail.value = email.value;
                boton.setAttribute("data-bs-toggle", "modal");
                boton.setAttribute("data-bs-target", "#exampleModal");
                resultado.classList.remove("red");
            }
        });

        obtenerFinal.addEventListener("click", (e2) => {
            e2.preventDefault(); // Para que no se reinicie la página
            window.location.href = 'recompensa.html';
        });
    });

    const validarCampos = (email) => {
        let error = [false, ""];
        if (email.value.length < 5 || 
            email.value.length > 40 || 
            email.value.indexOf("@") === -1 || 
            email.value.indexOf(".") === -1) {
            error[0] = true;
            error[1] = "El email es inválido";
            return error;
        }
        return error;
    }
});