

type TRole = "user"|"admin"

export type TUser ={
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