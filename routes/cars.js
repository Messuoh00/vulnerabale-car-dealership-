const express= require("express")
const router =express.Router()

const Cardb= require('../models/carschema')

router.use(express.static("public"))



router.get("/",async(req,res)=>{


    try {

        const cars = await Cardb.find();

        res.render("carsearch",{ cars })
        
    } catch (error) {
        res.render("carsearch",{ cars })

    }
  

})




router.get("/newcar",(req,res)=>{

    res.render("carcreation")


}).post("/newcar",async(req,res)=>{


    
 try {
    const car = new  Cardb ({
        contact:req.body.contact,
        make:req.body.make,
        model: req.body.model, 
        year: req.body.year,
        price: req.body.price,
        description: req.body.description,
        mileage:req.body.mileage,
        AOM:req.body.AOM
    })

    console.log(car)

    const newcar= await car.save()    
    res.redirect("/cars")

} catch (error) {
    res.status(400).json({message: error.message})
    res.render("signup")
}
    



})



module.exports = router