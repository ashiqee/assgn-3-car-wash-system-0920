import { Model } from "mongoose";


export type TRole = "user"|"admin"

export type TUser ={
    toObject(): unknown;
    name:string;
    email:string;
    password:string;
    phone:string;
    role: TRole;
    address: string;

}

export type TUserAuth = {
    email: string,
    password: string,
}


export interface UserModel extends Model<TUser>{
    isUserExistByEmail(email: string): Promise<TUser>;

    isPasswordMatched(
        plainTextPassword:string,
        hashedPassword:string,
    ):Promise<boolean>;


}