## Descrição

Implementação de uma API simples para gestão de atletas, desenvolvida como atividade prática de CI/CD, Docker e integração de notificações automatizadas.

## Implementações

- Projeto em Node.js com Express;
- Consulta e cadastro de atletas;
- Validação de dados;
- Testes automatizados;
- Pipeline de CI/CD com GitHub Actions;
- Dockerização da aplicação;
- Notificações automáticas no Discord após commits e merges na branch `main`.

## CI/CD

O GitHub Actions executa automaticamente os testes em pushes e Pull Requests.

Na etapa de CI são realizadas:
- instalação das dependências;
- execução dos testes automatizados.

Na etapa de CD é gerado um artefato da aplicação pronto para entrega.

O pipeline também possui uma etapa de notificação integrada ao Discord, responsável por informar os resultados da execução.

## Notificações no Discord

O GitHub Actions está configurado para enviar alertas automáticos ao Discord sempre que ocorrer um push na branch `main`, incluindo atualizações decorrentes de merges.

As notificações são enviadas após a conclusão das etapas de CI e CD e apresentam:

- Repositório atualizado;
- Identificador do commit;
- Autor da alteração;
- Resultado dos testes automatizados;
- Resultado da etapa de entrega;
- Link para a execução do GitHub Actions.

A notificação é enviada mesmo quando os testes ou a entrega falham, permitindo acompanhar o resultado do pipeline.

### Configuração

Para habilitar as notificações:

1. Criar um webhook no canal desejado do Discord.
2. Copiar a URL do webhook.
3. Acessar o repositório no GitHub em `Settings > Secrets and variables > Actions`.
4. Criar um novo segredo com o nome `DISCORD_WEBHOOK_URL`.
5. Inserir a URL do webhook como valor do segredo.

A URL é armazenada de forma segura no GitHub Secrets, evitando sua exposição no código-fonte.

## Execução do projeto

Instale as dependências:

```bash
npm install
```