const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
    code: { type: String},
    content: { type: String},
    language: {type: String}
})

const Code = mongoose.model('Code', postSchema);

module.exports = Code;