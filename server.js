const express= require('express')
const  mongodb = require('mongoose')
const app = express()

mongodb.connect('mongodb://localhost/carwebsite' )

const db=mongodb.connection

db.on('error',(error) => console.log('error in db '))
db.on('open',() => console.log('db connected'))




app.set('view engine','ejs')

app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
 console.log('works')   
 res.render("index")

})

const userroute=require('./routes/user.js') 

app.use('/user',userroute)
app.use(express.static("public"))
app.listen(3000)

