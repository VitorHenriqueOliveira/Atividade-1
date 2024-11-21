const express = require('express'); //fala que quer utilizar o express
const router = express.Router();

//Listar aluno - show.ejs

router.get('/', async(req, res) => { //quando chegar na rais de aluno ('/')
    res.render( // vai criar a página (render)
        "base", // apartir da base
        {
            title: "Aluno", //com o titulo aluno
            view: "aluno/show",
        }
    );
});
    // get pega a informacão da URL  
    // async é uma funcao assincrona, se der um problema na internet ela espera para ser disparada
    // req e res = requericao e resposta


//Add aluno - add.ejs

router.get('/add', async(req, res) => { //quando chegar em add alunos ('/add')
    res.render( // vai criar a página (render)
        "base", // apartir da base
        {
            title: "Adicionar Aluno", //com o titulo adicionar alunos
            view: "aluno/add",
        }
    );
});

//Editar aluno - edit.ejs

router.get('/edit', async(req, res) => { //quando chegar em edit de alunos ('/edit')
    res.render( // vai criar a página (render)
        "base", // apartir da base
        {
            title: "Editar Aluno", //com o titulo editar aluno
            view: "aluno/edit",
        }
    );
});

module.exports = router; 
//todas as rotas que aqui criou, se não forem exportadas ele não le, não roda, e da erro
//quem vai ler o as rotas é o app.js, se não exportar ele não consegue ler
