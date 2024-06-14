import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

const UserSchema = new Schema<TUser>({
    name: {
        type: String,
        require: [true,'name must be required']
    },
    email: {
        type: String,
        require: [true,'Email must be required'],
        unique:true,
    },
    password: {
        type: String,
        require: [true,'password must be required'],
        select:false
    },
    phone: {
        type: String,
        require: [true,'phone must be required']
    },
    role: {
        type: String,
        enum: ['user','admin']
    },
    address: {
        type: String,
        require: [true,'address must be required']
    },
},{
    timestamps:true,
})

UserSchema.pre('save', async function (next) {
    
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; 
   
    user.password = await bcrypt.hash(
      user.password,
      Number(config.BCRYPT_SALT_ROUNDS),
    );
    next();
  });


UserSchema.post('save', function (doc,next){
    doc.password='';
    next();
});

UserSchema.statics.isUserExistByEmail = async function (email: string){
    return await User.findOne({email}).select('+password');
}


UserSchema.statics.isPasswordMatched = async function(
    plainTextPassword,
    hashedPassword,
){
    return await bcrypt.compare(plainTextPassword,hashedPassword);
}


export const User = model<TUser, UserModel>('User',UserSchema);