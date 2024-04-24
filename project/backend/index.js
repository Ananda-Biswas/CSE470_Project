const express = require('express')
const app = express()
const port = 5000
const connectToMongoDB = require('./db');


app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self' https://www.youtube.com");
  next();
});



app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
next();

})
app.get('/',(req,res)=>
{
  res.send("Hello world")
})
app.use(express.json())
app.use('/api',require("./Routes/createuser"));


connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
});