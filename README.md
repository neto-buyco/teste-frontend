## Teste Front-end BuyCo.

Este teste é apresentado aos candidatos as vagas de desenvolvimento front-end, o objetivo é avaliar seus conhecimentos em organização, estilo, boas práticas e habilidades.

#### O Desafio:

Seu objetivo é criar uma simples aplicação que deve conter as seguintes páginas:

1. Página de listagem de usuários

   Esta página deverá consumir os dados de uma API, e mostrar uma lista com os seguintes dados dos usuários: Id, Nome + Sobrenome, E-mail

2. Página de cadastro de usuários

   Esta página deve conter um formulário para cadastro de usuário e seu endereço. 

3. Página de detalhes do usuário

   Esta página deverá conter todos os dados do usuário

#### Requisitos funcionais:

- A lista de usuários devera possuir ordenação por Id e Nome.
- A lista de usuários devera possuir paginação com um limite máximo de 10 registros por página.

#### Requisitos não funcionais:

- Sua aplicação deverá ser uma SPA;
- Deverá ser utilizado algum framework de mercado Angular, React, Vue (Dê preferencia Vue)
- Deverá ser utilizado alguma biblioteca de controle de estado (NgRx, Redux, Vuex, etc ...)
- Não devera ser utilizado nenhum biblioteca CSS como Bootstrap ou Materialize, ou suas  implementações para os frameworks, como Angular Material, React Bootstrap, Vuetify, entre outros. (Queremos ver a sua capacidade de lidar com essa parte)
- Pré-processadores CSS como Saas, Less, Stylus são bem vindos, mas não são obrigatórios;
- Poderá ser utilizado tanto JavaScript quanto TypeScript o que o candidato achar melhor.

#### O que seria um PLUS:

- Páginas responsivas
- Feedbacks visuais para o usuário (alertas, inputs...)
- Edição dos dados do usuário
- Deleção do usuário
- Testes unitários

#### Sobre a API onde os dados serão consumidos e salvos:

Nesse repositório existe uma pasta server onde se encontra a API que será utilizada para consumo dos dados e cadastro do usuário.

Essa API roda no endereço http://localhost:3000 e o único recurso que possui é o de Users.

| MÉTODO | URI         | AÇÃO                      |
| ------ | ----------- | ------------------------- |
| GET    | /users      | Lista todos os usuários   |
| GET    | /users/{id} | Lista um usuário pelo Id  |
| POST   | /users      | Cria um usuário           |
| PUT    | /users/{id} | Edita um usuário pelo Id  |
| DELETE | /users/{id} | Deleta um usuário pelo Id |

Essa API foi desenvolvida utilizado a biblioteca **json-server** toda a documentação está disponível no seguinte endereço: https://github.com/typicode/json-server. Na documentação dela você encontrar a descrição de como realizar paginação e ordenação dos dados.

Todos os dados são Fake e a nível de exemplo, a cada vez que você mata e executa novamente o servidor eles mudam.

###### Exemplo para a chamada GET http://localhost:3000/users/1 .

```json
{
  "id": 1,
  "firstName": "Tertuliano",
  "lastName": "Macedo",
  "email": "Feliciano.Santos84@gmail.com",
  "phone": "+55 (37) 7839-4248",
  "address": {
    "zipCode": "24226",
    "city": "Município de Talita",
    "streetAddress": "9654 Carvalho Avenida",
    "country": "Svalbard & Jan Mayen Islands",
    "state": "Amazonas",
    "geo": {
      "latitude": "-54.5261",
      "longitude": "-150.6626"
    }
  }
}
```

###### Para executar o servidor:

```bash
cd server && npm install && npm start
```


Qualquer dúvida: Envie um e-mail para neto@buyco.com.br

