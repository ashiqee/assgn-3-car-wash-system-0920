import express, { Application, Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app : Application = express();

app.use(express.json());


app.use('/api/',router)

const apiCheck = async (req:Request,res:Response)=>{
    const message = "Car wash server api run";
    res.send(message)
}


app.get('/api/',apiCheck);

app.use(notFound)


export default app ;