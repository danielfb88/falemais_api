<h1 align="center">FaleMais API</h1>

## Primeiros passos

1. A versão utilizada é Node.js 12
1. É necessário ter o PostgreSQL 10 ou 11 instalado, ou você pode usar o Docker.
2. Instale as dependências com `npm ci`.
3. Faça uma cópia do arquivo `.env.example` com o nome`.env`.
4. Se você tiver uma instalação local do PostgreSQL, crie um database vazio e configure o arquivo `.env` com as informações de acesso.
5. Se não, execute `npm run postgres:start` e `npm run database:create` para criar e configurar um database com Docker.
6. Rode o projeto localmente com `npm run dev`.
7. Execute os casos de teste com `npm test`.
8. Execute `gulp` para buildar o projeto.
9. Execute `npm start` para buildar e executar o projeto.

Daniel Bonfim <daniel.fb88@gmail.com>
