import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import config from "./config";


let server :Server;

async function main(){
    try{
        // await mongoose.connect()

        server = app.listen(config.PORT,()=>{
            console.log(`App is listening on port ${config.PORT}`);
            
        })

    }catch(err){
        console.log(err);;
        
    }
    
}

main();