const express= require("express")
const router =express.Router()


const Userdb= require('../models/userschema')

router.use(express.static("public"))


router.get("/login",(req,res)=>{


    res.render("login")

})




router.get("/signup", (req,res)=>{

    
    res.render("signup")
   

}).post("/signup", async (req,res)=>{

    console.log(req.body)
   
    const user = new  Userdb ({
        email: req.body.email,
        password: req.body.password
    })


 
 try {

    const newuser= await user.save()
    res.status(201).json(newuser)

    
} catch (error) {
    res.status(400).json({message: error.message})
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