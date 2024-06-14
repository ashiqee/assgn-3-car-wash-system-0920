import { TBooking } from "./booking.interface";
import { ServiceBooking } from "./booking.model";


const createServiceBookingIntoDB = async(payload: TBooking)=>{



    const result = ServiceBooking.create(payload)

    return result;

}


export const serviceBookings = {
    createServiceBookingIntoDB
}