const mongoose = require ("mongoose")
mongoose.connect("mongodb://localhost:27017/usuarios")
.then(() => {
    console.log("Conectado");
})
.catch(() => {
    console.log("No hay conexion");
})


const newSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection = mongoose.model("collection", newSchema)
module.exports = collection

