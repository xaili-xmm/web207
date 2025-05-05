// Importar el módulo HTTP
const http = require('http');

// Definir el puerto
const port = 3005;

// Crear el servidor
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola mundo');
});
/*
server.listen(port,()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`)
});
*/
// Escuchar en el puerto
server.listen(port, () => {
  console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});
