const express = require("express")
const collection = require ("./mongo.js")
const cors = require ("cors")
const app = express ()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", cors(),(req,res)=> {

})

app.post("/",async(req,res) => {
    const{username,password} = req.body;

    try {
        const check = await collection.findOne({username:username})
        
        if (check) {
            res.json("exist")        
        } else {
            res.json("notexist")
        }
        
    } catch(e) {
        res.json("notexist")        
    }
})


app.post("/signup",async(req,res) => {
    const{username,password} = req.body;

    const datos = {
        username:username,
        password:password
    }

    try {
        const check = await collection.findOne({username:username})
        
        if (check) {
            res.json("exist")        
        } else {
            res.json("notexist")
            await collection.insertMany([datos])
        }
        
    } catch(e) {
        res.json("notexist")        
    }
})

app.listen(8000,() => {
    console.log("Puerto Conectado")
})