const express= require('express')

const app = express()

app.get('/',(req,res)=>{
 console.log('ayo')   
})


app.listen(3000)

