import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "../user/user.model";
import { myBookingsServices } from "./myBooking.services";




const getUserBookings = catchAsync(async(req,res)=>{

    const user = req.user;
    const currentuser = await User.findOne({email:user.userEmail})

    const result = await myBookingsServices.getUsersBookingsFromDB(currentuser._id)
  
    
    if(result.length === 0){
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
        message: "User bookings retrieved successfully",
        data:result,
    })

})


export const myBookingController = {
    getUserBookings
}