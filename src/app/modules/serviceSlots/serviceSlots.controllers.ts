import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slotsServices } from "./serviceSlots.services";


const getAllServiceSlot = catchAsync(async(req,res)=>{

    const result = await slotsServices.getAllServicesSlotFromDB()

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Slots retrive successfully",
        data:result,
    })
})



export const ServiceSlotsController = {
    getAllServiceSlot,
}
