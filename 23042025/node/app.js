//importamos el modulo HTTP que viene inclServidorNodeImportado en Node.js
const PauquetesServidorNodeImportado = require('http');
 
//definos un puerto de salida del servidor
const port= 3056;

//crear ServidorNodeImportadoervidor 
const server = PauquetesServidorNodeImportado.createServer((req,res)=>{
    //establecer el encabezado de respuesta
    res.writeHead(200,{'Content-Type':'text/plain'});
    
    //Enviamos la respuesta 
    res.end('Hola mundo con NODE.js');
});

//Escuchar el puerto

server.listen(port,()=>{
    console.log(`Servidor ejecutandose por medio de http://localhost:${port}`);
});