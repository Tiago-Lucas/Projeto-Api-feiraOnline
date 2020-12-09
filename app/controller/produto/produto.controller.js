const { isEmptyObject } = require('../../helper/helper')
const produtoModel = require('../../model/produto/produto.model')

exports.adicionarProduto = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        var produto = new produtoModel(req.body)
        const produtoCriado = await produto.save()
        res.status(201).send({ data: produtoCriado, message: 'Produto criado criado.' })
    } catch (error) {
        res.status(500).send({ data: null, message: error })
    }
}
exports.buscarProduto = async (req, res) => {
    try {
        const  id  = req.params.id
        const produto = await produtoModel.findOne( { _id: id } )
        res.status(200).send({ data: produto, message: 'OK' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao buscar comentário. Verifique as informações e tente novamente.' })
    }
}
exports.removerProduto = async (req, res) => {
    try {
        const id = req.params.id
         await produtoModel.remove({_id:id})
        res.status(200).send({ data: null, message: 'Produto Removido.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao remover comentário. Verifique as informações e tente novamente.' })
    }
}
exports.editarProduto = async (req, res) => {
    if (isEmptyObject(req.body)) {
        res.status(400).send({ data: null, message: 'Requisicão inválida. Verifique as informações e tente novamente.' })
    }

    try {
        const { id } = req.params
        const produtoAtualizado = await produtoModel.findOneAndUpdate({_id:id }, req.body)
        res.status(200).send({ data: produtoAtualizado , message: 'produto atualizado.' })
    } catch (error) {
        res.status(500).send({ data: error, message: 'Erro ao editar comentário. Verifique as informações e tente novamente.' })
    }
}