// Capturando os campos do formulário
const nome = document.getElementById('name');
const senha = document.getElementById('password');
const email = document.getElementById('email');
const acoes = document.getElementById('acoes');

// Capturando o formulário
const form = document.getElementById('form');

// Adicionando evento ao formulário
form.addEventListener('submit', saveRegister);

function saveRegister(evento) {
    evento.preventDefault();

    // Armazenando os itens preenchidos no Local Storage
    localStorage.setItem('nome', nome.value);
    localStorage.setItem('senha', senha.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('acoes', acoes.value);

    // Adicionando a nova linha na tabela
    addRowTable(nome.value, email.value, acoes.value);

    // Limpando os campos do formulário
    form.reset();
}

// Função para adicionar uma nova linha na tabela
function addRowTable(nome, email, acoes) {
    const table = document.getElementById('data-table');

    // Adicionando uma nova linha na tabela
    const row = table.insertRow();

    // Criando os espaços na linha para receber as informações
    const cellNome = row.insertCell(0);
    const cellEmail = row.insertCell(1);
    const cellAcoes = row.insertCell(2);

    // Inserindo as informações nos espaços criados
    cellNome.textContent = nome;
    cellEmail.textContent = email;
    cellAcoes.textContent = acoes;
}
