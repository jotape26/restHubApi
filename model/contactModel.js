var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    criacao: {
        type: Date,
        default: Date.now
    }
})

var Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.geoSearch = function (callback, limit) {
    Contact.find(callback).limit(limit);
}