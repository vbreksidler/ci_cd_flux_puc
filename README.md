## Descrição

Implementação de uma API simples para gestão de atletas,
desenvolvida como atividade prática de CI/CD.

## Implementações

- Estrutura inicial do projeto Node.js;
- API utilizando Express;
- Consulta de atletas;
- Cadastro de atletas;
- Validação dos dados;
- Testes automatizados;
- Pipeline de CI utilizando GitHub Actions.

## CI

O workflow executa automaticamente os testes do projeto
em pushes e Pull Requests.

## Execução do projeto

Instale as dependências:

npm install

Execute os testes:

npm test

Inicie a aplicação:

node src/app.js

## CI/CD

O projeto utiliza GitHub Actions para automatizar o fluxo de integração e entrega contínua.

Na etapa de CI são executados:
- instalação das dependências;
- testes automatizados.

Após o merge na branch main, a etapa de CD gera um artefato da aplicação pronto para entrega.