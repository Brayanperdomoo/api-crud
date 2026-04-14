const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [];

// CREAR
app.post('/usuarios', (req, res) => {
    usuarios.push(req.body);
    res.json({ mensaje: "Usuario creado" });
});

// LEER
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

// ACTUALIZAR
app.put('/usuarios/:id', (req, res) => {
    usuarios[req.params.id] = req.body;
    res.json({ mensaje: "Usuario actualizado" });
});

// ELIMINAR
app.delete('/usuarios/:id', (req, res) => {
    usuarios.splice(req.params.id, 1);
    res.json({ mensaje: "Usuario eliminado" });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});

// prueba actions// prueba actions 2