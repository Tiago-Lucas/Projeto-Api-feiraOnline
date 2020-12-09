const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const produtoSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    produto:{
        type:String,
        trim:true,
        required:true
    },
    descricao:{
        type:String,
        trim:true,
        required:true
    },
    preco:{
        type: Number,
        trim: true,
        required: true
    },
    local:{
        cidade:{
                type: String,
                trim: true,
                required: true
        },
        estado:{
        type: String,
        trim: true,
        required: true
    }
    }
}, { versionKey: false })

module.exports = mongoose.model('produto', produtoSchema);