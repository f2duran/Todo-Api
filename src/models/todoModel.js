let mongoose = require("mongoose")
let todoSchema = new mongoose.Schema({
     name: {//veri tabanina eklenecek verilerin schemasi olustururlur
          type: String,//veri turu
          required: true,//zorunluluk alani
          trim: true//bosluklari kabul edip etmemek
     },
     description: {
          type: String,
          required: true,
          trim: true
     },
     complated: {//gorevin yapiip yapilmadigini true false kontrolu icin tanimlanir
          type: Boolean,
          default: false
     }
}, { colletion: "Todo", timestamps: true })//olusturulma ve guncellenme tarihi verisi ekleme
let todo = mongoose.model("Todo", todoSchema)//?
module.exports = todo//diger sayfalardan bu schemaya erismek icin kullanilir.