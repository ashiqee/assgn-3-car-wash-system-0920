import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";
import config from "../../config";


const createUser = catchAsync(async (req,res)=>{
    const userData=req.body;


    const result =  await userServices.createUserIntoDB(userData);

    const resultObj = result.toObject();
    delete resultObj.password;
    delete resultObj.__v;

    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message: "User registered successfully",
        data: resultObj,
    })
})



// login user 

const signInUser = catchAsync(async(req,res)=>{
    const result = await userServices.userSignIntoDB(req.body);
    const {refreshToken,accessToken,user} = result;

    res.cookie('refreshToken',refreshToken,{
        secure: config.NODE_ENV === 'production',
        httpOnly:true,
        sameSite:'none',
        maxAge: 1000*60*60*24*365,
    })
    delete user.__v
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"User logged in successfully",
        token: `${accessToken}`,
        data:user
    })
})



// refresh Token 

const refreshToken = catchAsync(async(req,res)=>{
    const {refreshToken}= req.cookies;
    const result = await userServices.refreshToken(refreshToken);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:"Access token is retrived successfully",
        data:result
    })
    
})


export const UserControllers = {
    createUser,
    signInUser,
    refreshToken,
}