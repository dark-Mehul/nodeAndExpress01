const express = require("express");

const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middleWares");
const userRouter = require("./routes/user");
const app = express();
const port = 8000;



//connection
connectMongoDb('mongodb://127.0.0.1:27017/dummy-app-01').then(() => console.log('mongodb connected'));



app.use(express.urlencoded({ extended: false }));

app.use(logReqRes('log.txt'));

//adding the middle wares
app.use((req, res, next) => {
  console.log("Hi there from middle ware");
  // return res.json({msg : 'hi there ending from middle ware'});
  next();
});

//routes will go over here


app.use("/api/users",userRouter)

app.listen(port, () => {
  console.log(`server started on port : ${port}`);
});
