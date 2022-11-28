const { request, response } = require("express")
let todo = require("../models/todoModel")

//apilerin yazildigi kisim. 
let tododd = async (req, res) => {//todo ekle metodu.
     try {
          let _todo = await todo.findOne({ name: req.body.name })
          if (_todo) {
               return res.status(400).json({
                    success: false,
                    message: "Bu isimde Kayıt mevcut"
               })
          }
          let todoAdd = new todo(req.body)

          await todoAdd.save()
               .then(() => {
                    return res.status(201).json(todoAdd)
               })
               .catch((err) => {
                    return res.status(400).json({
                         success: false,
                         message: "Kayıt oluşturulurken sorun çıktı" + err
                    })
               })
     } catch (error) {
          return response.status(500).json({
               success: false,
               message: "Kayıt oluşturulamadı"
          })
     }
}
let todoGetAll = async (req, res) => {
     //butun datayi bir anda getirmek sunucuyu yoracagi icin bolum bolum datayi vermesini saglicaz
     let { page } = req.query//sayfa aliniyor
     let limit = 2
     let skip = Number(page - 1) * limit//en son hangi sayfada kaldigi hesaplaniyor
     try {
          let todoGetAll = await todo.find({}).limit(limit).skip(skip)//bos obje tum kayitlari cekmesini iste anlamina geliyor
          return res.status(200).json({
               success: true,
               data: todoGetAll
          })
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Kayıtlar getirilemedi"
          })

     }
}
let todoUpdate = async (req, res) => {
     let { id } = req.params
     try {
          let todoUpdate = await todo.findByIdAndUpdate(id, req.body)
          if (todoUpdate) {
               return res.status(200).json({
                    success: true,
                    message: "Güncelleme başarılı"
               })
          } else {
               return res.status(400).json({
                    success: false,
                    message: "kayit guncellenemedi"
               })
          }
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Kayıt guncellenemedi!"
          })
     }
}
let todoDelete = async (req, res) => {
     let { id } = req.params
     try {
          let todoDelete = await todo.findByIdAndDelete(id)
          if (todoDelete) {
               return res.status(200).json({
                    success: true,
                    message: "Kayıt başarılı bir şekilde silindi"
               })
          } else {
               return res.status(500).json({
                    success: false,
                    message: "Kayıt bulunamadığı için silinemedi"
               })
          }
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Kayıt silinemedi"
          })
     }
}
let todoId = async (req, res) => {
     let { id } = req.params
     try {
          let todoId = await todo.findById(id)
          if (todoId) {
               return res.status(200).json({
                    success: true,
                    message: "Kayıt bulundu",
                    data: todoId
               })
          } else {
               return res.status(500).json({
                    success: false,
                    message: "Kayıt böyle bir kayıt bulunamadı"
               })
          }
     } catch (error) {
          return res.status(500).json({
               success: false,
               message: "Kayıt silinemedi"
          })
     }
}
module.exports = {
     tododd,
     todoGetAll,
     todoUpdate,
     todoDelete,
     todoId
}