let router = require("express").Router()//modul icindeki roter metodunu aldik
let todoController = require("../controller/todoController")
//ekleme yapmak icin post kullanilir
router.post("/todo", todoController.tododd)
router.get("/todo", todoController.todoGetAll)
router.put("/todo/:id", todoController.todoUpdate)
router.delete("/todo/:id", todoController.todoDelete)
router.get("/todo/:id", todoController.todoId)
module.exports = router
