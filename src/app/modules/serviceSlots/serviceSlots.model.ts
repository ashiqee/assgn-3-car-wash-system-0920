import { Schema, model } from "mongoose"
import { TServiceSlot } from "./serviceSlots.interface"



const ServiceSlotSchema = new Schema<TServiceSlot>(
    {
        service:{
            type: Schema.Types.ObjectId,
            // type: String,
            ref:"Service",
            required:true,
        },
        date:{
            type: String,
            required:true,
        },
        startTime:{
            type:String,
            required:true,

        },
        endTime:{
            type:String,
            required:true,
        },
        isBooked:{
            type: String,
            enum: ["available","booked","canceled"],
            default:'available',
        }


    },{
        timestamps:true,
    }
)



export const ServicesSlot = model<TServiceSlot>('ServicesSlot',ServiceSlotSchema)