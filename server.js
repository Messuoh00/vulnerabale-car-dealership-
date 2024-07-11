const express= require('express')

const app = express()

app.set('view engine','ejs')

app.use(express.static("public"))


app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
 console.log('works')   
 res.render("index")

})



const userroute=require('./routes/users.js') 

app.use('/users',userroute)

app.listen(3000)

