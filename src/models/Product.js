const {mongoose, Schema, model} = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/zapatillas")
    .then(db => console.log('Conectado'))
    .catch(error => console.log('Desconectado'))

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true
    }
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Product', productSchema);