import { Types } from "mongoose";


export type TService= {
    name: string;
    description:string;
    price:number;
    duration:number;
    isDeleted: boolean;
}

export type TServiceSlot= {
    // service: Types.ObjectId;
    
    service: string;
    date: string;
    startTime: string;
    endTime:string;
    isBooked: "available"| "booked"| "canceled";
    createdAt:string,
            updatedAt:string,

}