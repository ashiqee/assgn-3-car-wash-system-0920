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
    if(!result){
        return sendResponse(res,{
             statusCode: httpStatus.NOT_FOUND,
             success:false,
             message: "No Data Found",
             data:[],
         })
     }
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
    if(!result){
        return sendResponse(res,{
             statusCode: httpStatus.NOT_FOUND,
             success:false,
             message: "No Data Found",
             data:[],
         })
     }
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
    if(!result){
       return sendResponse(res,{
            statusCode: httpStatus.NOT_FOUND,
            success:false,
            message: "No Data Found",
            data:[],
        })
    }
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Service updated successfully",
        data:result,
    })
})


const deleteService = catchAsync(async(req,res)=>{
    const {id}=req.params;
    const result = await Services.deleteServiceFromDB(id);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Service deleted successfully",
        data:result,
    })
})

export const ServicesController = {
    CreateService,
    getAllServices,
    getSingleService,
    updateService,
    deleteService
}