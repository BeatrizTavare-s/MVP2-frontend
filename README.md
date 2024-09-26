# Sistema de Análise de Rotina

![Tela do Sistema](https://github.com/BeatrizTavare-s/MVP2-frontend/blob/main/assets/tela.PNG)

Este projeto utiliza técnicas de Machine Learning para prever se uma pessoa tem obesidade ou não, com base em dados de sua rotina. O sistema foi desenvolvido com uma arquitetura separada de front-end e back-end, utilizando bibliotecas populares de ciência de dados e desenvolvimento web.

## Descrição do Projeto

O objetivo deste sistema é classificar se uma pessoa tem obesidade ou não, com base em vários fatores do seu estilo de vida, como consumo de alimentos, atividade física e uso de telas. O modelo principal escolhido para a tarefa é o **KNN (K-Nearest Neighbors)**, devido à sua simplicidade, eficácia em problemas de classificação e desempenho consistente em novos dados.

### Funcionalidades

- Coleta de dados sobre o estilo de vida do usuário (gênero, idade, histórico familiar, consumo de alimentos, etc.)
- Previsão de obesidade baseada em uma série de atributos relacionados à saúde e ao comportamento do usuário
- Visualização dos dados e geração de relatórios

### Atributos dos Dados

Os dados considerados no modelo incluem:

- **Gênero**
- **Idade** 
- **Histórico familiar de sobrepeso**
- **Consumo de calorias e vegetais**
- **Número de refeições diárias**
- **Consumo de alimentos entre as refeições**
- **Atividade física e tempo em telas**
- **Uso de álcool e cigarro**
- **Principal meio de transporte**

## Tecnologias Utilizadas

### Back-end

- **Python 3.12.6**
- **Jupyter Notebook** para desenvolvimento e testes do modelo de Machine Learning
- **Bibliotecas de Machine Learning**: Scikit-learn, NumPy, Pandas
- **KNN (K-Nearest Neighbors)**: Algoritmo de classificação principal
- **Flask** para criação da API que expõe o modelo de Machine Learning
- **Banco de Dados**: SQLite

### Front-end

- **HTML5** e **CSS3** para estruturação e estilização do layout
- **JavaScript** para interatividade no formulário
- **Fetch** para fazer as requisições à API

## Estrutura do Projeto

- `frontend/`: Contém o código do front-end, com os arquivos HTML, CSS e JavaScript.
- `backend/`: Contém o código do back-end, incluindo o modelo de Machine Learning e a API em Flask.
- `data/`: Contém os arquivos de dados utilizados no projeto.
- `models/`: Contém o modelo treinado.
- `README.md`: Este arquivo de documentação.

## Como Executar o Projeto

### Back-end

1. Clone o repositório:

```bash
git clone https://github.com/BeatrizTavare-s/MVP2-backend
```

2. Instale as dependências:

```bash
pip install -r backend/requirements.txt
```

3. Execute a aplicação Flask:
```bash
flask run --host 0.0.0.0 --port 5000 --reload
```

A API estará disponível em http://localhost:5000.

### Front-end
1. Clone o repositório:
```bash
git clone https://github.com/BeatrizTavare-s/MVP2-frontend
```
2. Navegue até a pasta frontend
3. Abra o arquivo index.html no navegador.

A aplicação consumirá a API do back-end para realizar as previsões.

## Análise do Modelo
A escolha do KNN foi motivada por sua capacidade de lidar bem com problemas de classificação, sendo simples de implementar e com um bom desempenho geral no nosso conjunto de dados. Testamos outras abordagens, como Decision Trees e SVM, mas o KNN mostrou-se mais consistente nos resultados.

O modelo foi avaliado utilizando métricas como acurácia, precisão e recall, sendo capaz de prever com confiança o índice de obesidade com base nos dados fornecidos.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.
