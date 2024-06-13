import { Schema, model } from "mongoose";
import { TService, TServiceSlot } from "./service.interface";



const ServiceSchema = new Schema<TService>(
    {
        name:{
            type: String,
            required: true,
            unique:true
        },
        description:{
            type: String,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
        duration:{
            type: Number,
            required: true,
        },
        isDeleted:{
            type: Boolean,
            required: true,
            default:false,
        },
    },{
        timestamps:true,
    }
)

ServiceSchema.pre("find",function(next){
    this.find({isDeleted:{$ne:true}});
    next()
});

ServiceSchema.pre("findOne",function(next){
    this.find({isDeleted:{$ne:true}});
    next()
})

export const Service =  model<TService>('Service',ServiceSchema)


const ServiceSlotSchema = new Schema<TServiceSlot>(
    {
        service:{
            type: Schema.Types.ObjectId,
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
        }


    },{
        timestamps:true,
    }
)



export const ServicesSlot = model<TServiceSlot>('ServicesSlot',ServiceSlotSchema)