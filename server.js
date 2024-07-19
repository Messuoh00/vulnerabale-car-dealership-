require('dotenv').config()

const express= require('express')

const app = express()

const  mongodb = require('mongoose')



mongodb.connect(process.env.DATABASE_URL)

app.use(express.static("public"))

const db=mongodb.connection

db.on('error',(error) => console.log('error in db '))
db.on('open',() => console.log('db connected'))

app.use(express.json)


app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
 
 res.render("index")

})

const userroute=require('./routes/user.js') 

app.use('/user',userroute)


app.listen(3000)

