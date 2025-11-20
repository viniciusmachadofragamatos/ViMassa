# ViMassa
Um projeto de gerenciamento de clientes pela nossa API REST criada com CRUD, feita com node.js e o framework express, banco de dados foi o MySqlWorkBrench

## Quem fez
Nossa equipe foi composta por Marcos, Samuel e Vinicius

## Como rodar?
1. **Clone o repositório e instale as dependências:**

   ```sh
   yarn init -y
   ```

   **configure o package.json:**
  ```json
   {
      "name": "todolist",
      "version": "1.0.0",
      "main": "app.js",
      "type": "module",
      "license": "MIT",
      "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
      }
   }
   ```
   
   **Instale as dependências**
   
   ```sh
   yarn add mysql2 dotenv express
   ```

   ```sh
   yarn add -D nodemon
   ```

2. **Configure o banco de dados MySQL:**
   - Crie o banco de dados `tarefas` e a tabela:
     ```sql
     CREATE DATABASE tarefas;
     USE tarefas;
     CREATE TABLE tarefa (
       id INT PRIMARY KEY AUTO_INCREMENT,
       titulo VARCHAR(100),
       descricao TEXT,
       data DATE,
       status TINYINT(1) DEFAULT 0
     );
     ```
3. **Inicie o servidor:**

   ```sh
   yarn dev
   ```

   O servidor rodará em `http://localhost:3000/`.

4. **Acesse o frontend:**
   - Abra `http://localhost:3000/` no navegador.

---

## Estrutura de Pastas

```
toDoList/
│
├── .env
├── .gitignore
├── app.js
├── package.json
├── README.MD
├── yarn.lock
│
├── controllers/
│   └── tarefaController.js
├── models/
│   └── tarefa.js
├── routes/
│   └── tarefasRoutes.js
├── database/
│   └── database.js
│
└── public/
    ├── index.html
    ├── css/
    │   └── style.css
    └── js/
        └── app.js
