const express = require('express');
require('dotenv').config();
const app = express();
const Configuration = require('./Configurations/config')
const connectDB = require ('./Database/db_connect');
const userroute = require('./Routes/user_route');
const categoryroute = require('./Routes/category_route')
app.use(express.json())

connectDB()


app.use('/user',userroute)
app.use('/category',categoryroute)


app.use('/',(req,res)=>(
    res.send(`I am running on ${Configuration.PORT}`)
))

app.listen(Configuration.PORT, () => {
  console.log(`Server listening at http://localhost:${Configuration.PORT}`);
});