const express= require("express")
const router =express.Router()

const bcrypt = require('bcrypt')

const Userdb= require('../models/userschema')

router.use(express.static("public"))


router.get("/login",(req,res)=>{

    res.render("login")

}).post("/login",async (req,res)=>{

    const user= await Userdb.findOne({email:req.body.email})

    if (user==null){
        return res.status(400).send('no such user')
    }

    try {
      
        const exist= await bcrypt.compare(req.body.password,user.password)

        
        if ( exist) {
           
            res.render('userpage')

        }else{
                res.render('login')
        }
        

    } catch  {
        res.status(500).send('wrong')
    }
    
})



router.get("/signup", (req,res)=>{

    
    res.render("signup")
   

}).post("/signup", async (req,res)=>{

    

 try {

    const salt = await bcrypt.genSalt()
    const hashedpassword = await bcrypt.hash(req.body.password, salt)

    const user = new  Userdb ({
        email: req.body.email,
        password: hashedpassword
    })

    const newuser= await user.save()    
    res.render("login")

} catch (error) {
    res.status(400).json({message: error.message})
    res.render("signup")

}
    

})






router.route("/:id").get(async (req,res)=>{
         
    try {

       const users = await Userdb.find()

        res.json(users)
        
         
    } catch (error) {
        res.status(500).json({message: error.message})
    }
        

    
    }).put( (req,res)=>{
        res.send(`update user ${req.params.id}`)
    
    }).delete( (req,res)=>{
        res.send(`delete user ${req.params.id}`)
    })


module.exports = router