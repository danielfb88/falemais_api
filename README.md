<h1 align="center">FaleMais API</h1>

## First steps

1. You will need Node.js 12 installed and PostgreSQL 10 or 11.
2. Install dependencies with `npm ci`.
3. Copy the `.env.example` file to the`.env` file.
4. If you have a local PostgreSQL installed, create an empty database in it and configure `.env` with the accesses.
5. If not, use `npm run postgres:start` and` npm run database:create` to create and configure one with Docker.
6. Run the project locally with `npm run dev`.
7. Run the test suite of the project with `npm test`.
