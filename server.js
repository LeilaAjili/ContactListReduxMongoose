const express = require('express')
const router = require("./routers/contact")


const mongoose = require ('mongoose')

const app = express()
app.use(express.json())

const db="mongodb+srv://leila:password9@cluster0-zqxba.mongodb.net/test?retryWrites=true&w=majority"
//const db="mongodb://localhost:27017/workshopContactList"

mongoose.connect(db,
    { useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true  })
.then(()=>console.log("Mongodb connected ....")).catch(err=>console.log(err))


app.use("/contact-list",router)

app.listen(5000, (err)=>
{console.log('LIVE AT 5000..')
})
