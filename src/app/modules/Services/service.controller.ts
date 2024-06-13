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
        message: "Service created successfully",
        data:result,
    })
})

const getAllServices = catchAsync(async(req,res)=>{
   
    const result = await Services.getAllServicesFromDB();
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Services retrieved successfully",
        data:result,
    })
})



const getSingleService = catchAsync(async(req,res)=>{
    const {id} = req.params
    const result = await Services.getSingleServiceFromDB(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Service retrieved successfully",
        data:result,
    })
})

const updateService = catchAsync(async(req,res)=>{
    const {id}=req.params;
    const updateData = req.body;
    const result = await Services.updateServiceIntoDB(id,updateData)
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Service updated successfully",
        data:result,
    })
})

export const ServicesController = {
    CreateService,
    getAllServices,
    getSingleService,
    updateService
}