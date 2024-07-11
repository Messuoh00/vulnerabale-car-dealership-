const express= require("express")

const router =express.Router()


router.get("/",(req,res)=>{

    res.send("you are a user hoho")

})

router.get("/new",(req,res)=>{

    res.send("you are a NEW user hoho")

})


router.route("/:id").get((req,res)=>{
        res.send(`this is user ${req.params.id}`)
    
    }).put( (req,res)=>{
        res.send(`update user ${req.params.id}`)
    
    }).delete( (req,res)=>{
        res.send(`delete user ${req.params.id}`)
    })

 

router.param("id",(req,res,next,id)=>{
    req.user=user[id]
    next()
})

module.exports = router