import { TBooking } from "./booking.interface";
import { ServiceBooking } from "./booking.model";


const createServiceBookingIntoDB = async(payload: TBooking)=>{



    const result = ServiceBooking.create(payload)

    return result;

}


const getAllServiceBookingFromDB = async ()=>{
    const result = ServiceBooking.find().populate('customer service slot','-role -createdAt -updatedAt')
    return result;
}


export const serviceBookings = {
    createServiceBookingIntoDB,
    getAllServiceBookingFromDB
}