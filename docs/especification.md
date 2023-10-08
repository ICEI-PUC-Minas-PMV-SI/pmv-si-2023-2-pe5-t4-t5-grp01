# Especificações do Projeto

Alguns elementos são essenciais para um bom planejamento do sistema, tais como os tópicos a serem apresentados a seguir. Um dos tópicos de extrema importância são as personas, que consistem em representações de personagens fictícios com o objetivo de destacar o principal consumidor e interessado no produto criado. Além disso, as histórias de usuários desempenham um papel fundamental, pois consistem em descrições objetivas das necessidades do usuário do ponto de vista dele.

Outro elemento de grande importância são os requisitos funcionais, que englobam as funcionalidades e características esperadas do nosso programa. Por exemplo, isso envolve permitir que o usuário cadastre, edite, delete, favorite e comente receitas. Seguindo a mesma linha de raciocínio, temos os requisitos não funcionais, que abrangem como as funcionalidades serão entregues ao usuário do sistema, tais como uma página com carregamento rápido, interface intuitiva e proteção de dados . E por último, mas não menos importante, temos as restrições, que representam as limitações impostas à aplicação, como um site que contenha apenas receitas simples, de baixo custo e saudáveis.

Essas seções visam contribuir para o resultado esperado do sistema de software.

## Personas

1. Eduardo Silva, 18 anos, recentemente aprovado na faculdade federal do estado vizinho. Em busca de um curso mais especializado e de correr atrás de seu sonho tomou a difícil decisão de sair da casa dos pais e morar sozinho em um ambiente completamente desconhecido. Eduardo possui muita ambição, porém é acompanhado de pouca experiência de se cuidar sozinho e busca informação para não passar tanta dificuldade.

2. Mariana Freitas, 25 anos, formada em letras pela USP. Mora sozinha a dois anos e leciona língua portuguesa em duas escolas diferentes. Possui uma vida muito corrida e raramente tem disposição e tempo para cozinhar, para remediar isso acaba pedindo delivery com grande frequência, mas nunca acaba o mês com o saldo positivo.

## Histórias de Usuários

Eu, como cliente Eduardo, quero sugestões de receitas mais difíceis para fazer. Como estou morando sozinho e estudo na parte da manhã, tenho tempo livre durante a tarde e a noite. Minha ideia são refeições para o dia-a-dia, gosto de pratos que levam como ingredientes, carne vermelha, frutos-do-mar, especiarias de outras culturas, assim podendo ter a culinária como minha terapia.

Eu, como cliente Mariana, quero sugestões de receitas práticas de se fazer. Como dou aula em duas escolas diferentes, não tenho muito tempo para cozinhar, preciso que sejam refeições práticas para o meu dia-a-dia e que se encaixam na minha dieta. Tenho em mente pratos que levam, frango, peixe e salada.

## Requisitos

Essa documentação visa detalhar a identificação de documentação precisa dos requisitos funcionais e não funcionais de um sistemas, contribuindo para a definição precisa do escopo, avaliação de viabilidade e comunicação eficaz entre todas as partes envolvidas em um projeto.

Diante disso, considerando as Histórias de Usuário fornecidas como entrada, elaboramos uma lista de requisitos que abrange tanto os aspectos funcionais quanto os não funcionais da solução proposta.

### Requisitos Funcionais (RF)

- |RF-001| Permitir que o usuário cadastre receitas.
- |RF-002| Permitir que o usuário edite as receitas postadas.
- |RF-003| Permitir que o usuário exclua receitas.
- |RF-004| Permitir que o usuário favorite as receitas.
- |RF-005| Permitir que o usuário deixe comentários.
- |RF-006| Fornecer uma interface de usuário intuitiva para cadastro e filtragem de receitas.

### Requisitos Não Funcionais (RNF)

- |RNF-001| O site deve ser fácil de usar, com uma interface intuitiva que permita aos usuários navegar facilmente pelas receitas, comentar e favoritar receitas sem dificuldades.
- |RNF-002| As páginas do site devem carregar rapidamente, com um tempo de resposta curto para proporcionar uma experiência de usuário ágil.
- |RNF-003| Deve ser implementada segurança básica para proteger os dados dos usuários, como senhas e informações pessoais, contra acessos não autorizados.
- |RNF-004| O site deve estar disponível a maior parte do tempo, com tempo de inatividade planejado mínimo para manutenção regular.
- |RNF-005| O site deve funcionar bem nos navegadores mais comuns, como Chrome, Firefox e Safari.
- |RNF-006| O site deve ser acessível para pessoas com deficiências, seguindo as diretrizes básicas de acessibilidade da Web.

Essa documentação de requisitos serve como um guia para o desenvolvimento, teste e validação da plataforma. A clareza e a abrangência desta especificação é importante para evitar retrabalho e problemas de escopo ao longo do ciclo de vida do projeto. Ela contribui para que o desenvolvimento da plataforma seja feito de modo estruturado e que a entrega atenda às expectativas dos usuários e aos critérios de qualidade estabelecidos.

## Restrições

| ID  | Restrição                                                                                                                                                                                                                                                                                |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | Em analogia ao fato de que a plataforma é voltada para um público onde, a maioria recém se tornou independente, e que grande parte não é familiarizado com o ambiente culinário, a plataforma se restringe a receitas de simples execução. Podendo ser executadas por todos os usuários. |
| 02  | Seguindo a ideia de que muitas vezes o público alvo ainda não tem uma vida financeira estabelecida, o projeto é voltado para receitas de baixo custo, se tornando assim, abrangente para a maioria das classes sociais.                                                                  |
| 03  | Pensando no bem-estar dos usuários, a plataforma é composta por uma biblioteca focada em receitas saudáveis, priorizando sempre que possível, o uso de ingredientes orgânicos e de baixo teor calórico.                                                                                  |
