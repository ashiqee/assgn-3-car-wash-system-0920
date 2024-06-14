import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { serviceBookings } from "./booking.services";
import { User } from "../user/user.model";
import { ServicesSlot } from "../serviceSlots/serviceSlots.model";


const createServiceBooking = catchAsync(async(req,res)=>{
    
    const bookingData = req.body;
    
    const user = req.user;


    const customer = await User.findOne({email:user.userEmail})



bookingData.customer = customer?._id;


if(customer){
    await ServicesSlot.findByIdAndUpdate(bookingData.slot,
        {isBooked:"booked"},{new:true}
     )
}

    const result = await (await serviceBookings.createServiceBookingIntoDB(bookingData))

    // booking succes after update booked 



      sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "Booking successful",
        data:result,
    })
})


export const BookingControllers = {
    createServiceBooking,
}