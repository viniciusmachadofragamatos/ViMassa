import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// servir os arquivos da pasta "public"
app.use(express.static("public"));

// usar as rotas
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
