const {mongoose, Schema} = require("mongoose");

const articleSchema = new Schema({
    name: String,
    price: Number,
    category: String,
}, {timestamps: true})
// mongoose.pluralize(null)
const ArticleModel = mongoose.model("Article", articleSchema)

module.exports = ArticleModel
