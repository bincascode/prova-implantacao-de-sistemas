const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();
app.use(express.static('public'));
app.use(express.static(__dirname)); 
const PORT = 4000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


// Rota para salvar paciente
app.post('/api/pacientes', async (req, res) => {
    const { nome, celular, email } = req.body;

    const { data, error } = await supabase
        .from('pacientes') // Nome da tabela no Supabase
        .insert([{ nome, celular, email }])
        .select();

    if (error) return res.status(400).json(error);
    res.status(201).json(data);
});

// Rota para carregar a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});



