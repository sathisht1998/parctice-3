const express = require('express')
const app = express()
//get routes
app.get('/',(req,res)=>{
    res.send('hello Node ApI')
})

//listen to port
app.listen(3000, () => {
    console.log('node api is running')
})
