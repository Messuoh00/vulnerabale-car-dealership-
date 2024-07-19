const express= require("express")
const router =express.Router()
router.use(express.static("public"))


router.get("/login",(req,res)=>{

    res.render("login")

})

router.get("/signup",(req,res)=>{

    
    res.render("signup")
   

}).post("/signup",(req,res)=>{

     console.log("hey")
        const data ={
            name: req.body.email,
            password: req.body.password
        }

       
        console.log(data)

        res.render("signup")

})






router.route("/:id").get((req,res)=>{
         
    res.render("userpage")

    
    }).put( (req,res)=>{
        res.send(`update user ${req.params.id}`)
    
    }).delete( (req,res)=>{
        res.send(`delete user ${req.params.id}`)
    })


module.exports = router