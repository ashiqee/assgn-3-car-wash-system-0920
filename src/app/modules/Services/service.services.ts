import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Service } from "./service.model"
import { TService } from "./service.interface";

const createServiceIntoDB = async(payload: TService)=>{

    const isServiceExists = await Service.findOne({name: payload.name});
    if(isServiceExists){
        throw new AppError(httpStatus.NOT_FOUND,"Same Service Name already exist")
    }

    const result = await Service.create(payload);

    return result;


}


const getAllServicesFromDB = async ()=>{
  
    
    const result = await Service.find()
    return result;
}


export const Services = {
    createServiceIntoDB,
    getAllServicesFromDB
}