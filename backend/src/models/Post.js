const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    //cria dois campos que armazenam a data da criação e alteração de cada registro
    timestamps: true
})


module.exports = mongoose.model('Post', PostSchema)