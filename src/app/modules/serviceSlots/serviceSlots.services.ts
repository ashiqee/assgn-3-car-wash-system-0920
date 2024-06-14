import { TQuery } from "../booking/booking.interface";
import { ServicesSlot } from "./serviceSlots.model";



// get all services


const getAllServicesSlotFromDB = async (payload:TQuery) => {
    const {date,serviceId}=payload;

    const query = {isBooked:{$eq:"available"}}
    if(date){
        query.date =date;
    }

    if(serviceId){
        query.service =serviceId;
    }
    const result = await ServicesSlot.find(query).populate('service');
    return result;
  };



  export const slotsServices = {
    getAllServicesSlotFromDB
  }