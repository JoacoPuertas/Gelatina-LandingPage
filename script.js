document.addEventListener('DOMContentLoaded', function () {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        const email = form.querySelector('input[type="email"]');
        const boton = form.querySelector('button[type="submit"], input[type="submit"]');
        const resultado = form.querySelector('.resultado');
        const modalEmail = document.querySelector('#exampleModal input[type="email"]');
        const modalNombre = document.querySelector('#exampleModal input[placeholder="Nombre"]');
        const obtenerFinal = document.querySelector('#exampleModal .obtener-final');
        const descuentoSelect = document.querySelector('#inputGroupSelect01');
        const programaSelect = document.querySelector('#inputGroupSelect02');

        boton.addEventListener("click", (e) => {
            e.preventDefault(); // Para que no se reinicie la página
            let error = validarEmail(email);
            if (error[0]) {
                resultado.innerHTML = error[1];
                resultado.classList.add("red");
            } else {
                modalEmail.value = email.value;
                boton.setAttribute("data-bs-toggle", "modal");
                boton.setAttribute("data-bs-target", "#exampleModal");
                resultado.classList.remove("red");
                resultado.innerHTML = '';
            }
        });

        obtenerFinal.addEventListener("click", (e2) => {
            e2.preventDefault(); // Para que no se reinicie la página
            
            // selecciones del usuario
            const selectedDescuento = descuentoSelect.options[descuentoSelect.selectedIndex].text;
            const selectedPrograma = programaSelect.options[programaSelect.selectedIndex].text;

            //selecciones en localStorage
            localStorage.setItem('selectedDescuento', selectedDescuento);
            localStorage.setItem('selectedPrograma', selectedPrograma);
            localStorage.setItem('nombre', modalNombre.value);

            window.location.href = 'recompensa.html';
        });
    });

    const validarEmail = (email) => {
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

    // recompensa html
    if (window.location.pathname.includes('recompensa.html')) {
        const selectedDescuento = localStorage.getItem('selectedDescuento');
        const selectedPrograma = localStorage.getItem('selectedPrograma');
        const nombre = localStorage.getItem('nombre');

        if (selectedDescuento && selectedPrograma && nombre) {
            document.getElementById('descuento').textContent = selectedDescuento;
            document.getElementById('programa').textContent = selectedPrograma;
            document.getElementById('nombre').textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

        }
    }
});
