import express, { Application, Request, Response } from "express";

const app : Application = express();

app.use(express.json());


const apiCheck = async (req:Request,res:Response)=>{
    const message = "Car wash server api run";
    res.send(message)
}


app.get('/api/',apiCheck);


export default app ;