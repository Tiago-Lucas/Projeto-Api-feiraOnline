const express = require('express'),
app = express(),
port = process.env.PORT || 3009,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(
    "mongodb+srv://BancoFeira:123@feira123.iqhyu.mongodb.net/feira123?retryWrites=true&w=majority",
    { useNewUrlParser: true }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erro na conexao com o MongoDB"));
db.once("open", function () {
    console.log('Conexao com o Banco de dados OK!!!');
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const userRoute = require('./route/usuario/usuario.route');
userRoute(app);
//const produtoRoute = require('./route/produto/produto.route');
//produtoRoute(app);

app.listen(port);
console.log('Servidor NodeJS rodando na porta: '+port);