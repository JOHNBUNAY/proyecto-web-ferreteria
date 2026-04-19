
// LÓGICA DE VALIDACIÓN Taller 11 y 12


const formulario = document.getElementById('formCheckout');
const inputTelefono = document.getElementById('telefono');
const errorTelefono = document.getElementById('errorTelefono');
const selectPago = document.getElementById('metodoPago');
const campoTarjeta = document.getElementById('campoTarjeta');

// Validación en vivo del teléfono Taller 11
inputTelefono.addEventListener('input', (e) => {
    const longitud = e.target.value.length;
    
    // Validamos que tenga exactamente 10 caracteres
    if (longitud > 0 && longitud !== 10) {
        inputTelefono.className = 'input-invalido';
        errorTelefono.className = 'error-visible';
    } else if (longitud === 10) {
        inputTelefono.className = 'input-valido';
        errorTelefono.className = 'error-oculto';
    } else {
        inputTelefono.className = '';
        errorTelefono.className = 'error-oculto';
    }
});

//Lógica condicional: Mostrar/Ocultar campos Taller 12
selectPago.addEventListener('change', (e) => {
    if (e.target.value === 'tarjeta') {
        campoTarjeta.classList.remove('oculto');
    } else {
        campoTarjeta.classList.add('oculto');
    }
});

// 3. Control del envío del formulario (Taller 11)
formulario.addEventListener('submit', (e) => {
    // Si el teléfono no tiene 10 dígitos, detenemos el envío
    if (inputTelefono.value.length !== 10) {
        e.preventDefault(); 
        inputTelefono.className = 'input-invalido';
        errorTelefono.className = 'error-visible';
        alert('Por favor, ingresa un número de teléfono válido (10 dígitos) antes de continuar.');
    } else {
        e.preventDefault(); // Evitamos que la página recargue realmente para la exposición
        alert('¡Compra confirmada! Gracias por confiar en Construmetal.');
        window.location.href = 'index.html'; // Redirige de vuelta a la tienda
    }
});