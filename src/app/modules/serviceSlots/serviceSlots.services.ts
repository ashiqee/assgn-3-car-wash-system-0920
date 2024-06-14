import { ServicesSlot } from "./serviceSlots.model";



// get all services


const getAllServicesSlotFromDB = async (payload) => {
    const {date,serviceId}=payload;

    const query: any = {isBooked:{$eq:"available"}}
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