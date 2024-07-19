require('dotenv').config()

const express= require('express')

const app = express()

const  mongodb = require('mongoose')


app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set('view engine','ejs')


mongodb.connect(process.env.DATABASE_URL)

const db=mongodb.connection

db.on('error',(error) => console.log('error in db '))
db.on('open',() => console.log('db connected'))


app.get('/',(req,res)=>{
 
 res.render("index")

}
)



const userroute=require('./routes/user.js') 

app.use('/user',userroute)


app.listen(3000)

