document.getElementById('routineForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const formData = new FormData(this);

    // Enviar os dados para o servidor usando fetch
    fetch('http://127.0.0.1:5000/person_routine', {
        method: 'POST',
        body: formData // Enviando como FormData
    })
    .then(response => response.json())
    .then(data => {console.log(data); fetchData();})
    .catch(error => console.error('Error:', error));
});


// Função para buscar os dados do backend
async function fetchData() {
    try {
        const response = await fetch('http://127.0.0.1:5000/person_routines');
        if (!response.ok) {
            throw new Error('Erro ao buscar dados');
        }
        const dados = await response.json();
        populateTable(dados.person_routines);
        return dados.person_routines
    } catch (error) {
        console.error(error);
    }
}

// Função para popular a tabela com os dados recebidos
function populateTable(dados) {
    const tabela = document.getElementById('consumoTabela').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novos dados

    dados.forEach(item => {
        const row = tabela.insertRow();
        row.insertCell(0).innerText = item.nome;  // Nome
        row.insertCell(1).innerText = item.idade;  // Idade
        row.insertCell(2).innerText = item.genero_masculino === 1 ? 'Masculino' : 'Feminino';  // Gênero Nível de Atividade Física
        row.insertCell(3).innerText = item.outcome === 0 ? 'Sem obesidade': 'Com obesidade';  // Resultado (pode ser preenchido conforme necessário)
        
        const deleteCell = row.insertCell(4);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Deletar';
        deleteButton.className = 'buttonDelete';
        deleteButton.onclick = () => deletarConsumo(item.nome);
        deleteCell.appendChild(deleteButton);
    });
}

// Função para deletar o consumo de água
async function deletarConsumo(nome) {
    try {
        const response = await fetch(`http://127.0.0.1:5000/person_routine?nome=${nome}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Erro ao deletar consumo de água');
        }
        // Recarregar os dados após a deleção
        await fetchData();
    } catch (error) {
        console.error(error);
    } finally {
        fecharModal(); // Fecha o modal após a operação
    }
}

// Chama a função para buscar os dados ao carregar a página
fetchData();


async function downloadCSV() {
    try {
        const data = await fetchData();
        // Definindo o cabeçalho
        const header = [
            'nome', 
            'genero_masculino', 
            'idade', 
            'historico_familiar_sobrepeso', 
            'consumo_alta_caloria_com_frequencia', 
            'consumo_vegetais_com_frequencia', 
            'refeicoes_dia', 
            'consumo_alimentos_entre_refeicoes', 
            'fumante', 
            'consumo_agua', 
            'monitora_calorias_ingeridas', 
            'nivel_atividade_fisica', 
            'nivel_uso_tela', 
            'consumo_alcool', 
            'transporte_automovel', 
            'transporte_bicicleta', 
            'transporte_motocicleta', 
            'transporte_publico', 
            'transporte_caminhada', 
            'outcome'
        ].join(',') + '\n';

        // Gerando o conteúdo do CSV
        const csvContent = data.map(item => {
            return `${item.nome},${item.genero_masculino},${item.idade},${item.historico_familiar_sobrepeso},${item.consumo_alta_caloria_com_frequencia},${item.consumo_vegetais_com_frequencia},${item.refeicoes_dia},${item.consumo_alimentos_entre_refeicoes},${item.fumante},${item.consumo_agua},${item.monitora_calorias_ingeridas},${item.nivel_atividade_fisica},${item.nivel_uso_tela},${item.consumo_alcool},${item.transporte_automovel},${item.transporte_bicicleta},${item.transporte_motocicleta},${item.transporte_publico},${item.transporte_caminhada},${item.outcome}`;
        }).join('\n');

        // Juntando cabeçalho e dados
        const fullCsvContent = header + csvContent;

        const blob = new Blob([fullCsvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        
        link.setAttribute('href', url);
        link.setAttribute('download', 'dados.csv');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('downloadCSV').addEventListener('click', downloadCSV);