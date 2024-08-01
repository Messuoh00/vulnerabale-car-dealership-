const express= require("express")
const router =express.Router()

const bcrypt = require('bcrypt')
const Cardb= require('../models/carschema')
const Userdb= require('../models/userschema')

router.use(express.static("public"))


router.get("/login",(req,res)=>{

    res.render("login",{message: null})


}).post("/login",async (req,res)=>{

     
    try {
        const user= await Userdb.findOne({email:req.body.email})
       
        const exist= await bcrypt.compare(req.body.password,user.password)

        
        if ( exist) {
           
            if (! req.session.authenticated) {

                req.session.authenticated=true
                req.session.user=user
            }
            
            res.redirect('me')


        }else{
                res.render('login',{message: 'wrong password'})
               
        }
        

    } catch (error) {
       
        res.render("login",{message:'user dosent exist'})
    }
    
})


router.get("/signup", (req,res)=>{
  
    res.render("signup",{message:null})
   

}).post("/signup", async (req,res)=>{
 
 try {
 
    const salt = await bcrypt.genSalt()
    const hashedpassword = await bcrypt.hash(req.body.password, salt)
    
    const user = new  Userdb ({
        username:req.body.username,
        email: req.body.email,
        password: hashedpassword
    })
    console.log(user)
    const newuser= await user.save()    
    res.render("login",{message: null})

} catch (error) {
    
    res.render("signup",{message: error.message})

}
    

})


router.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Failed to logout.');
        }
        res.redirect('/'); // Redirect to login page after logout
    });
});



router.get("/:id",async (req,res)=>{
         
    try {
        const cars = await Cardb.find({'contact':req.params.id});
        console.log(req.params.id)
        res.render("userpage",{cars})
        
    } catch (error) {
        res.status(500).json({message: error.message})
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