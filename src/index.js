const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res,next)=>{
    res.status(200).send('API-EnergyReflux');
})

app.listen(PORT,()=>{
    console.log(`Server listening at port : ${PORT}`);
})