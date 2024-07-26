require('dotenv').config()

const express= require('express')
const app = express()

const session= require('express-session')
const userroute=require('./routes/user.js') 
const carsroute=require('./routes/cars.js') 



const  mongodb = require('mongoose')


app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set('view engine','ejs')




//session setup


app.use(session({
    secret:'some secret',
    cookie:{maxAge:30000000},
    saveUninitialized: false,
    resave:false,
})) 


authMiddleware = (req, res, next) => {
    res.locals.session = req.session;
    next();
};      
 
app.use(authMiddleware)
//database setup
mongodb.connect(process.env.DATABASE_URL)

const db=mongodb.connection

db.on('error',(error) => console.log('error in db '))
db.on('open',() => console.log('db connected'))


app.get('/',(req,res)=>{

    
     
 res.render("index")

}
)



//routes setup  

app.use('/user',userroute)



app.use('/cars',carsroute)





app.listen(3000)

