## Descrição

Implementação de uma API simples para gestão de atletas, desenvolvida como atividade prática de CI/CD e Docker.

## Implementações

- Projeto em Node.js com Express;
- Consulta e cadastro de atletas;
- Validação de dados;
- Testes automatizados;
- Pipeline de CI/CD com GitHub Actions;
- Dockerização da aplicação.

## CI/CD

O GitHub Actions executa automaticamente os testes em pushes e Pull Requests.

Na etapa de CI são realizadas:
- instalação das dependências;
- execução dos testes automatizados.

Na etapa de CD é gerado um artefato da aplicação pronto para entrega.

## Execução do projeto

Instale as dependências:

```bash
npm install
