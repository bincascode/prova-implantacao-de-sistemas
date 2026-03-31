const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

console.log("DEBUG - URL:", process.env.SUPABASE_URL ? "OK" : "VAZIO");
console.log("DEBUG - KEY:", process.env.SUPABASE_ANON_KEY ? "OK" : "VAZIO");
app.use(express.static('public'));
app.use(express.static(__dirname)); 
const PORT = 4000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

app.get('/', (req, res) => {
    // Adicione 'public' dentro do path.join
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Isso também é importante para carregar CSS/JS que estiverem lá
app.use(express.static(path.join(__dirname, 'public')));

// Rota para salvar paciente
app.post('/api/pacientes', async (req, res) => {
    const { nome, celular, email } = req.body;

    const { data, error } = await supabase
        .from('pacientes')
        .insert([{ nome, celular, email }])
        .select(); // <--- ESSA LINHA É OBRIGATÓRIA

    if (error) return res.status(400).json(error);
    
    // O Supabase devolve um array, então enviamos o primeiro item
    res.status(201).json(data); 
});



if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    app.listen(PORT, () => console.log(`Rodando local em http://localhost:${PORT}`));
}



module.exports = app;


