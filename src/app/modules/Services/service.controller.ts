import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Services } from "./service.services";


const CreateService = catchAsync(async (req,res)=>{
    const userData=req.body;


    const result =  await Services.createServiceIntoDB(userData);

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Create a service successfully",
        data:result,
    })
})

const getAllServices = catchAsync(async(req,res)=>{
   
    const result = await Services.getAllServicesFromDB();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Get All service retrived successfully",
        data:result,
    })
})


export const ServicesController = {
    CreateService,
    getAllServices
}