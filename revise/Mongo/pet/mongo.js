const { MongoClient } = require("mongodb")
const express = require("express")
const cors = require("cors")   
const app = express()
 
app.use(cors())
app.use(express.json())

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)
let db, petCollection

const connection = async () => {
    try {
        await client.connect()
        db = client.db("pets")
        petCollection = db.collection("petscollection")
        console.log("🟢 Connected successfully")
    } catch (error) {
        console.error("Database connection error:", error)
    }
}
connection()

app.post('/pets', async (req, res) => {
    try {
        const {name, age, price} = req.body
        await petCollection.insertOne({name, age: Number(age), price: Number(price)})
        console.log("Pet added🔥")
        res.status(201).json({ success: true })
    } catch (error) {
        console.error("Error adding pet:", error)
        res.status(500).json({ success: false })
    }
})

app.get('/pets/average', async (req, res)=>{
    const varo = await petCollection.aggregate([
        {
            $group: {
            _id: "$name", 
            avg: {'$avg': '$price'}}}
    ]).toArray()
    res.json(varo)

})
app.listen(3000, () => {
    console.log("The app is listening to http://localhost:3000")
})