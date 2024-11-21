//aqui é a rota index.js, que vai mandar o usuário para o index.ejs e outras páginas

const express = require('express'); //fala que quer utilizar o express
const router = express.Router();

//Página principal index.ejs

router.get('/', async(req, res) => { //quando chegar na rais ('/')
    res.render( // vai criar a página (render)
        "base", // apartir da base
        {
            title: "Página principal", //com o titulo Página principal
            view: "index",
        }
    );
});

//Página quemsomos.ejs

router.get('/quemsomos', async(req, res) => { //quando chegar na rais ('/')
    res.render( // vai criar a página (render)
        "base", // apartir da base
        {
            title: "Quem Somos",
            view: "quemsomos",
        }
    );
});


module.exports = router; //exporta o router para ser usado em outros lugares
//quem vai ler o as rotas é o app.js, se não exportar ele não consegue ler
