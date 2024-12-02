# Projeto MTD Backend

## Descrição

O **MTD Backend** é um sistema de gerenciamento de tarefas, desenvolvido para ajudar a organizar e gerenciar o progresso de tarefas diárias. Ele fornece funcionalidades para criar, listar, atualizar e excluir tarefas, além de permitir o controle de status das tarefas e a associação de tarefas a usuários. Este projeto utiliza Node.js com Express para construir a API, com suporte a autenticação via tokens Bearer, e comunicação com o banco de dados PostgreSQL.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework web para construir a API.
- **PostgreSQL**: Banco de dados relacional para armazenar dados do sistema.
- **JWT (JSON Web Token)**: Para autenticação de usuários.
- **Docker**: Para containerização da aplicação.
- **TypeORM**: ORM para integração entre a aplicação e o banco de dados.
- **InversifyJS**: Framework de injeção de dependências.
- **Redis**: Sistema de cache para melhorar a performance.

## Primeiros Passos

Siga os passos abaixo para configurar e executar o projeto localmente:

### 1. Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/usuario/mtd-backend.git
```

### 2. Adicionar as Dependências do projeto 

```bash
yarn install
```
ou caso esteja usando NPM:

```bash
npm install
```

### 3. Adicionar as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
ENVIRONMENT=<env_value>
PORT=<port_value>

# DATABASE CONFIG
DB_TYPE=<db_type>
DB_HOST=<db_host>
DB_EXTERNAL_HOST=<db_external_host>
DB_PORT=<db_port>
DB_EXTERNAL_PORT=<db_external_port>
DB_USERNAME=<db_username>
DB_PASSWORD=<db_password>
DB_DATABASE=<db_database>

# REDIS CONFIG
REDIS_HOST=<redis_host>
REDIS_PORT=<redis_port>

# AUTH CONFIG
AUTH_SECRET_TOKEN=<auth_secret_token>
AUTH_EXPIRES_IN_TOKEN=<auth_expires_in_token>
AUTH_SECRET_REFRESH_TOKEN=<auth_secret_refresh_token>
AUTH_EXPIRES_IN_REFRESH_TOKEN=<auth_expires_in_refresh_token>
AUTH_EXPIRES_REFRESH_TOKEN_DAYS=<auth_expires_refresh_token_days>
```

### 4. Criar o Container Docker

Para configurar o ambiente de desenvolvimento com Docker, rode o seguinte comando:

```bash
docker compose up --build
```

### 5. Rodar as Migrations

Após a criação do container, rode as migrations do TypeORM para configurar o banco de dados:

```bash
yarn typeorm migration:run
```
Ou se estiver usando o npm:
```bash
npm run typeorm migration:run
```

Após este processo o servidor deve ser reinicializado e estará disponível em:

```bash
http://localhost:<port_value>
```

### Hospedagem

O projeto está hospedado no seguinte domínio:

```bash
https://mtd-backend.onrender.com
```
e caso queira testar é somente configurar o postman ou o insomnia utilizando uma variável ```baseURL```

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE), para mais detalhes, consulte o arquivo LICENSE.








