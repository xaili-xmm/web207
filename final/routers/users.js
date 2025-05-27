const express = require('express');
const router = express.Router();
const db = require('../database'); // Asumiré que crearemos este archivo para la conexión a DB

// Mostrar todos los usuarios
router.get('/', (req, res) => {
    const consulta = 'SELECT * FROM users';
    
    db.query(consulta, (err, results) => {
        if(err) {
            console.error('Error al obtener usuarios', err);
            return res.render('error', { error: 'Error al obtener usuarios' });
        }
        res.render('users/index', { users: results });
    });
});

// Mostrar formulario para nuevo usuario
router.get('/new', (req, res) => {
    res.render('users/new');
});

// Crear nuevo usuario
router.post('/', (req, res) => {
    const { name, email } = req.body;
    const insertarRegistroUsuario = 'INSERT INTO users (name, email) VALUES (?, ?)';
    
    db.query(insertarRegistroUsuario, [name, email], (err) => {
        if(err) {
            console.error('Error al crear usuario', err);
            return res.render('users/new', { 
                error: 'Error al crear usuario',
                user: { name, email }
            });
        }
        res.redirect('/users');
    });
});

// Mostrar formulario de edición
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    const editar = 'SELECT * FROM users WHERE id = ?';
    
    db.query(editar, [id], (err, results) => {
        if(err) {
            console.error("Error al obtener usuario", err);
            return res.render('error', { error: 'Usuario no encontrado' });
        }
        res.render('users/edit', { user: results[0] });
    });
});

// Actualizar usuario
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const actualizarUser = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    
    db.query(actualizarUser, [name, email, id], (err) => {
        if(err) {
            console.error("Error al actualizar usuario", err);
            return res.render('users/edit', { 
                error: 'Error al actualizar usuario',
                user: { id, name, email }
            });
        }
        res.redirect('/users');
    });
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const eliminar = 'DELETE FROM users WHERE id = ?';
    
    db.query(eliminar, [id], (err) => {
        if(err) {
            console.error('Error al eliminar usuario', err);
            return res.status(500).send('Error al eliminar usuario');
        }
        res.redirect('/users');
    });
});

module.exports = router;