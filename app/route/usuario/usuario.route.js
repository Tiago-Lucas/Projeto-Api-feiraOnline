
const usuarioController = require('../../controller/usuario/usuario.controller')
module.exports = (app)=>{
    app.route('/cadastrar').post(usuarioController.cadastrarUsuario)
    app.route('/editar').put(usuarioController.editarUsuario)
    app.route('/listar').get(usuarioController.buscarUsuario)
    app.route('/deletar/:email').delete(usuarioController.removerUsuario)
}