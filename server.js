const express = require('express');
const path  = require('path');

// Inicializar el express app
const app = express();

// Configuración del puerto
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));
app.use(express.static(__dirname));

// Ruta Home

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Ruta para el formulario de contacto
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'contacto.html'));
});

// Ruta servicios de barberia
app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname,'productos.html'));
})

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});