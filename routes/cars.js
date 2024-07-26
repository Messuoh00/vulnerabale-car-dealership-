const express= require("express")
const router =express.Router()

const Cardb= require('../models/carschema')

router.use(express.static("public"))


const multer = require('multer');
const path = require('path');
const { Store } = require("express-session");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/carimage/'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with a unique name
    }
});

const upload = multer({ storage: storage });




router.get("/",async(req,res)=>{
    
   

    try {

        const cars = await Cardb.find();

        res.render("carsearch",{ cars })
        
    } catch (error) {
        res.render("carsearch",{ cars })

    }
  

})




router.get("/newcar", isAuthenticated, (req,res)=>{

    res.render("carcreation")


}).post("/newcar",isAuthenticated, upload.array('images', 10),async(req,res)=>{


    
 try {

    const images = req.files.map(file => `/${file.filename}`);

    const car = new  Cardb ({
        contact:req.session.user,
        make:req.body.make,
        model: req.body.model, 
        year: req.body.year,
        price: req.body.price,
        description: req.body.description,
        mileage:req.body.mileage,
        AOM:req.body.AOM,
        images:images
    })

    console.log(car)

    const newcar= await car.save()    
    res.redirect("/cars")

} catch (error) {
    res.status(400).json({message: error.message})
    res.render("signup")
}
    



})





function isAuthenticated(req, res, next) {
    if (req.session.authenticated) {
        return next();
    } else {
        res.redirect('/user/login');
    }
}



module.exports = router