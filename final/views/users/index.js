<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Usuarios</title>
    <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
    <div class="container">
        <h1>Lista de Usuarios</h1>
        
        <% if (typeof error !== 'undefined') { %>
            <div class="error"><%= error %></div>
        <% } %>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <% users.forEach(user => { %>
                <tr>
                    <td><%= user.id %></td>
                    <td><%= user.name %></td>
                    <td><%= user.email %></td>
                    <td>
                        <a href="/users/<%= user.id %>/edit">Editar</a>
                        <form action="/users/<%= user.id %>?_method=DELETE" method="POST" style="display: inline;">
                            <button type="submit">Eliminar</button>
                        </form>
                    </td>
                </tr>
                <% }); %>
            </tbody>
        </table>

        <h2>Agregar Usuario</h2>
        <form action="/users" method="POST">
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name" required maxlength="45" placeholder="Nombre de usuario">
            
            <label for="email">Correo:</label>
            <input type="email" name="email" id="email" placeholder="Correo" maxlength="45" required>
            
            <button type="submit">Agregar</button>
        </form>
    </div>
</body>
</html>