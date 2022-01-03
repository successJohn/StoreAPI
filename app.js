const express = require("express");
const app = express();
const connectDB = require("./Config/db")
const notFoundMiddleware = require("./Middlewares/not-found");
const errorMiddleware = require("./Middlewares/error-handler");
app.use(express.json());

//routes

app.get("/", (req, res) =>{
    res.send('<h1> STORE API</h1> <a href = "/api/v1/products"> products route </a> ')
})

app.use("/api/v1/products")
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000
const start = async () =>{
    try{
        await connectDB();
        app.listen(port, console.log(`server listening on port`))
    }catch(error){
        console.log(error);
    }
}

start();

