const mongoose =require('mongoose')


const UserSchema= new mongoose.Schema({

    username:{
        type: String,
        required: true,
        unique: true ,
        trim: true
    },

    email:{
        type: String,
        required: true,
        unique: true ,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
        trim: true,
      
    },
    password:{
        type: String,
        required: true,
        minlength: [7, 'Password must be at least 6 characters long'] 
    },

    type:{
        type: String,
        required: true,
        default:'B'
    }

})


module.exports=mongoose.model('user',UserSchema)