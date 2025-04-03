let inventario = [];

function mostrarMenu() {
    return parseInt(prompt(
        "Opciones disponibles: \n" +
        "1. Agregar producto \n" +
        "2. Mostrar todos los productos \n" +
        "3. Buscar producto por nombre \n" +
        "4. Salir \n" +
        "Elige una opción: "
    ));
}

function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo");
        }
    }
}

function agregarProducto() {
    let nombreProducto = prompt("Introduce el nombre del producto");
    let cantidadProducto = parseInt(prompt("Introduce la cantidad en stock: "));
    let precioProducto = parseFloat(prompt("Introduce el precio unitario del producto: "));

    if (!isNaN(cantidadProducto) && cantidadProducto > 0 && !isNaN(precioProducto) && precioProducto > 0) {
        let producto = {
            nombre: nombreProducto,
            cantidad: cantidadProducto,
            precio: precioProducto
        };

        inventario.push(producto);
        alert("Producto agregado correctamente.");
    } else {
        alert("Cantidad y precio deben ser valores numéricos positivos.");
    }
}

function mostrarProducto() {
    if (inventario.length === 0) {
        alert("Inventario vacío");
    } else {
        let mensaje = "Productos en inventario:\n";

        for (let i = 0; i < inventario.length; i++) {
            mensaje += `Producto ID: ${i + 1}\n` +
                       `Nombre: ${inventario[i].nombre}\n` +
                       `Cantidad: ${inventario[i].cantidad}\n` +
                       `Precio: ${inventario[i].precio}\n` +
                       "---------------------------------------\n";
        }
        alert(mensaje);
    }
}

function buscarProducto() {
    if (inventario.length === 0) {
        alert("El inventario está vacío. No hay productos para buscar.");
        return;
    }

    const nombreBuscado = prompt("Introduce el nombre del producto a buscar:").toLowerCase();
    let productosEncontrados = inventario.filter(producto => 
        producto.nombre.toLowerCase().includes(nombreBuscado)
    );

    if (productosEncontrados.length === 0) {
        alert("No se encontraron productos con ese nombre.");
    } else {
        let mensaje = `Resultados de búsqueda (${productosEncontrados.length} encontrados):\n\n`;
        
        for (let producto of productosEncontrados) {
            mensaje += `Nombre: ${producto.nombre}\n` +
                       `Cantidad: ${producto.cantidad}\n` +
                       `Precio: ${producto.precio}\n` +
                       "--------------------------\n";
        }
        alert(mensaje);
    }
}

iniciarPrograma();