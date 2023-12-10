# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:

- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp)
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

| ID     | Descrição do Requisito                                               | Prioridade | Artefato Criado      |
| ------ | -------------------------------------------------------------------- | ---------- | -------------------- |
| RF-001 | O sistema deve exibir o hub de receitas.                             | ALTA       | index.html           |
| RF-002 | O sistema deve exibir as receitas individualmente com mais detalhes. | ALTA       | receita/index.html   |
| RF-003 | O usuário deve poder favoritar as receitas.                          | MÉDIA      | receita/index.html   |
| RF-004 | O usuário deve poder criar uma conta.                                | ALTA       | registrar/index.html |
| RF-005 | O usuário deve poder acessar sua conta.                              | ALTA       | login/index.html     |
| RF-006 | O sistema deve informar ao usuário sobre a proposta do produto.      | MÉDIA      | sobre-nos/index.html |
| RF-007 | O sistema deve informar ao usuário sobre as capacidades do produto.  | MÉDIA      | ajuda/index.html     |
| RF-008 | O usuário deve poder pesquisar as receitas.                          | ALTA       | index.html           |
| RF-009 | O usuário deve poder filtrar as receitas.                            | ALTA       | index.html           |

## Descrição das estruturas:

## Receita

|   **Nome**    | **Tipo**         | **Descrição**                  | **Exemplo**                                                           |
| :-----------: | ---------------- | ------------------------------ | --------------------------------------------------------------------- |
|      Id       | Numero (Inteiro) | Identificador único da receita | 1                                                                     |
|    Título     | Texto            | Título da receita              | Batata frita                                                          |
|   Conteúdo    | Texto            | Conteúdo da receita            | Sistemas de Informação da PUC Minas é eleito o melhor curso do Brasil |
| Id do usuário | Texto            | Nome do usuário                | Gabriel                                                               |

## Usuário

|     **Nome**     | **Tipo**         | **Descrição**                  | **Exemplo**               |
| :--------------: | ---------------- | ------------------------------ | ------------------------- |
|        Id        | Numero (Inteiro) | Identificador único do usuário | 1                         |
| Email do usuário | Texto            | Email do usuário no sistema    | ricardoroca6212@gmail.com |
|      Senha       | Texto            | Senha do usuário               | (senha criptografada)     |

## Favoritos

|    **Nome**    | **Tipo**         | **Descrição**                   | **Exemplo** |
| :------------: | ---------------- | ------------------------------- | ----------- |
| Id do favorito | Numero (Inteiro) | Identificador único do favorito | 3           |
| Id do usuário  | Numero (inteiro) | Identificador único do usuário  | 2           |
| Id da receita  | Numero (inteiro) | Identificador único da receita  | 1           |
