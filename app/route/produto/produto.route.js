const produtoController = require('../../controller/produto/produto.controller')
module.exports = (app)=>{
    app.route('/cadastrar/produto').post(produtoController.adicionarProduto)
    app.route('/editar/produto').put(produtoController.editarProduto)
    app.route('/listar/produto').get(produtoController.buscarProduto)
    app.route('/deletar/produto:id').delete(produtoController.removerProduto)
}