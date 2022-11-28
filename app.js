//npm i express nodemon mongoose dotenv ==>tum gereksinimler import



let express = require("express")//express modulu projeye dahil edilir.
let app = express()//express paketi ile bir app olusturulur.



//config=> yeniden ayarlama veya duzeltme olarak tanimlanabilir
require("dotenv").config()//env portu app.js e getiriliyor. binevi import islemi yapiliyor
require("./src/config/databaseConnection")

let port = process.env.PORT || 5001 //port numarasi belirlernir. env modulu icideki portu al ama doluysa 5001 i kullan

app.use(express.json())//bodyden gelen verileri okumak icin kullanilir
let todoRouter = require("./src/routes/todoRouter")//routerlar icin kullanilir
app.use("/api", todoRouter)//her router onune /api yazmamak icin kullanilir


app.get("/", (req, res) => {
     res.send("Hoş Geliniz")
})//bos istek atmak


app.listen(port, () => {
     console.log(`Server ${port} portundan başlatldı`);
})//portu baglamak icin