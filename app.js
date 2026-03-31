const express = require('express');
const path = require('path');
const app = express();
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
app.use(express.static('public'));
const PORT = 4000;


// Pegando as variáveis de ambiente
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Criando o cliente de conexão
const supabase = createClient(supabaseUrl, supabaseKey);

// Rota para servir a página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});