
const btnCargar = document.getElementById('btnCargar');
const listaProductos = document.getElementById('listaUsuarios');
const spanValorCarrito = document.getElementById('valor');

let contadorCarrito = 0;

//  CONSUMIR EL JSON CON FETCH Taller 13
btnCargar.addEventListener('click', async () => {
    try {
        const respuesta = await fetch('data/productos.json');
        const productosJSON = await respuesta.json(); 
        
        renderizarProductos(productosJSON);
        
        btnCargar.style.display = 'none';
        
    } catch (error) {
        console.error('Error al cargar el catálogo:', error);
        alert('Hubo un error al cargar los productos.');
    }
});

//  RENDERIZAR PRODUCTOS EN EL DOM Taller 13

function renderizarProductos(productos) {
    // Limpiamos el contenedor por si acaso
    listaProductos.innerHTML = ''; 

    // Recorremos el arreglo de productos
    productos.forEach(producto => {
        // Creamos la tarjeta (Taller 10 y 13)
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
        
        tarjeta.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p class="precio">$${producto.precio.toFixed(2)}</p>
            <button class="boton-comprar" onclick="agregarAlCarrito()">Comprar</button>
        `;
        
        
        listaProductos.appendChild(tarjeta);
    });
}

//  LÓGICA DEL CARRITO Taller 9

function agregarAlCarrito() {
    contadorCarrito = contadorCarrito + 1;
    spanValorCarrito.textContent = contadorCarrito;
}