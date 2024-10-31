Deployed api - [https://kanban-backend-j2gc.onrender.com]

## Available endpoints:

Get todos (GET) - `/todos`;
Get todo by id (GET) - `/todos/${todoId}`;
Create todo (POST) - `/todos`;
Update todo (PATCH) - `/todos/${todoId}`;
Delete todo (DELETE) - `/todos/${todoId}`;

You can import this collection to your Postman or Insomnia - [Kanban_WIFOX.json](https://github.com/user-attachments/files/17591646/Kanban_WIFOX.json){"_type":"export","__export_format":4,"__export_date":"2024-10-31T17:42:18.634Z","__export_source":"insomnia.desktop.app:v10.1.1","resources":[{"_id":"req_686f85f66684497c9abab152b70ffdf6","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730299973069,"created":1730299797598,"url":"{{ _.URL }}/todos","name":"Get todos","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1730299797598,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","parentId":null,"modified":1730299793839,"created":1730299793839,"name":"Kanban WIFOX","description":"","scope":"collection","_type":"workspace"},{"_id":"req_89b12b5a60d64963ad79b9cdfe65256b","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730312304487,"created":1730312300336,"url":"{{ _.URL }}/todos/67224a44480f0d18ea7fb727","name":"Get todo by id","description":"","method":"GET","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1728716907476,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_81c3db68d9a44e1494bee6d8952b45de","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730312431258,"created":1730312325738,"url":"{{ _.URL }}/todos","name":"Create todo","description":"","method":"POST","body":{"mimeType":"application/json","text":"{\n\"title\": \"NEW task\",\n\"description\": \"Lorem ipsum dolor sit rule\",\n\"assignee\": \"Mykola\",\n\"dueDate\": \"2023-04-10T00:00:00.000Z\",\n\"status\": \"open\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1727925462415,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_d0aca0ba32924dcea5f881b280da27e5","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730312512192,"created":1730312480551,"url":"{{ _.URL }}/todos/672278f20dfc35c3598c0758","name":"Update todo","description":"","method":"PATCH","body":{"mimeType":"application/json","text":"{\n\"title\": \"UPDATED task\"\n}"},"parameters":[],"headers":[{"name":"Content-Type","value":"application/json"},{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1727529739884.5,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"req_425e288b12b14246bf8521c12e0013f1","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730312541207,"created":1730312534605,"url":"{{ _.URL }}/todos/672278f20dfc35c3598c0758","name":"Delete todo","description":"","method":"DELETE","body":{},"parameters":[],"headers":[{"name":"User-Agent","value":"insomnia/10.1.1"}],"authentication":{},"metaSortKey":-1727331878619.25,"isPrivate":false,"pathParameters":[],"settingStoreCookies":true,"settingSendCookies":true,"settingDisableRenderRequestBody":false,"settingEncodeUrl":true,"settingRebuildPath":true,"settingFollowRedirects":"global","_type":"request"},{"_id":"env_0288811f91bc203edf1a0dfc18d70a998eee225c","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730396495139,"created":1730299793840,"name":"Base Environment","data":{"URL":"https://kanban-backend-j2gc.onrender.com"},"dataPropertyOrder":{"&":["URL"]},"color":null,"isPrivate":false,"metaSortKey":1730299793840,"_type":"environment"},{"_id":"jar_0288811f91bc203edf1a0dfc18d70a998eee225c","parentId":"wrk_c2caf8b75a39457bb9391c0ae667e1d9","modified":1730299793841,"created":1730299793841,"name":"Default Jar","cookies":[],"_type":"cookie_jar"}]}


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
