import { ServicesSlot } from "./serviceSlots.model";



// get all services


const getAllServicesSlotFromDB = async () => {
    const result = await ServicesSlot.find().populate('service');
    return result;
  };



  export const slotsServices = {
    getAllServicesSlotFromDB
  }