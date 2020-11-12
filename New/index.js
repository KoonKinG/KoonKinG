const { respobse, response, request } = require('express');
const express=require('express');
const app=express();
app.listen(1212,() => console.log(' ที่อยู่ คือ 1212'));
app.use(express.static('MyWeb'));
app.post('/api',(request,response)=>{
    console.log(request);
});