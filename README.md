🚨The only thing is that the backend is deployed on a free "Render" resource, and if you do not use the server for 15 minutes, it will turn off, and then the first launch will be a little longer, about 1 - 1.5 minutes🚨

Deployed api - [https://kanban-backend-j2gc.onrender.com]

## Available endpoints:

* Get todos (GET) - `/todos`;
* Get todo by id (GET) - `/todos/${todoId}`;
* Create todo (POST) - `/todos`;
* Update todo (PATCH) - `/todos/${todoId}`;
* Delete todo (DELETE) - `/todos/${todoId}`;

You can import this collection to your Postman or Insomnia - [Kanban_WIFOX.json](https://github.com/user-attachments/files/17591646/Kanban_WIFOX.json)

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
