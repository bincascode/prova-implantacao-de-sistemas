document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const id = Math.floor(Math.random() * 10000); 
    const criadoEm = new Date().toLocaleString('pt-BR'); 

    // 2. Capturar dados dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular')?.value || "(00) 00000-0000"; 
    // Nota: Certifique-se de que o ID 'celular' existe no seu input de HTML!

    // 3. Criar a nova linha na tabela
    const tabela = document.getElementById('tabelaCorpo');
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>#${id}</td>
        <td>${criadoEm}</td>
        <td>${nome}</td>
        <td>${celular}</td>
        <td>${email}</td>
    `;

    // 4. Feedback e Limpeza
    const msg = document.getElementById('mensagem');
    msg.textContent = "Paciente cadastrado com sucesso!";
    msg.classList.remove('hidden');
    
    this.reset(); // Limpa o formulário
});