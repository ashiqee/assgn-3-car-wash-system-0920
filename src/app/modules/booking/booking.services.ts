import { TBooking } from "./booking.interface";
import { ServiceBooking } from "./booking.model";


const createServiceBookingIntoDB = async(payload: TBooking)=>{



    const result = await ServiceBooking.create(payload);

    const populateBooking = await ServiceBooking.findById(result._id)
    .populate('customer service slot','-role -__v -createdAt -updatedAt').select('-__v');
    return populateBooking;

}

//get all booking admin
const getAllServiceBookingFromDB = async ()=>{
    const result = ServiceBooking.find()
    .populate('customer service slot','-role -__v -createdAt -updatedAt').select('-__v')
    return result;
}

//get users all booking get user
const getUsersBookingsFromDB = async (userId: string)=>{
   
    

    const result = await ServiceBooking.find({customer: userId})
    .populate('service slot','-__v -createdAt -updatedAt').select('-customer -__v')
  
    
    return result;
}

export const serviceBookings = {
    createServiceBookingIntoDB,
    getAllServiceBookingFromDB,
    getUsersBookingsFromDB
}