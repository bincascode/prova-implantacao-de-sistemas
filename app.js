const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
const PORT = 4000;

// Rota para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});