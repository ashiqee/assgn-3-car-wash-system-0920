import { Types } from 'mongoose';

type VehicleType =
  | 'car'
  | 'truck'
  | 'suv'
  | 'van'
  | 'motorcycle'
  | 'bus'
  | 'electricVehicle'
  | 'hybridVehicle'
  | 'bicycle'
  | 'tractor';

type VehicaleBrand = 

     "TATA"
    | "RUNNER"
    | "HYUNDAI"
    | "HINO"
    | "COROLLA"
    | "BMW"
    | "FERRARI"
    | "TOYOTA"
    | "HONDA"
    | "FORD"
    | "CHEVROLET"
    | "NISSAN"
    | "VOLKSWAGEN"
    | "MERCEDES_BENZ"
    | "AUDI"
   



export interface TBooking {
  customer: Types.ObjectId;
  service: Types.ObjectId;
  slot: Types.ObjectId;
  vehicleType: VehicleType;
  vehicleBrand: VehicaleBrand;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate:string;
  
}
