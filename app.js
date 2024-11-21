const express = require("express"); 
const path = require("path");
const app = express();

// Configuração do EJS como view engine 
app.set("views", path.join(__dirname, "views")); //indentifica que a pasta views tem os arquivos de visualizacao
app.set("view engine", "ejs");

// Rota principal 
const indexRouter = require("./routes/index"); //indentefica que a rota principal é do index
app.use("/", indexRouter);

// Rota para aluno 
const alunoRouter = require("./routes/aluno"); //indetifica a pasta de aluno
app.use("/aluno", alunoRouter);

// Configurar a pasta pública para arquivos estáticos 
app.use(express.static(path.join(__dirname, 'public'))); //indentifica que a pasta public tem imagens

// Iniciar o servidor e sincronizar com o banco de dados
app.listen(3000, () => { //roda o servidor e escolhe a porta
 
  console.log("Servidor em execução na porta 3000");
 
});