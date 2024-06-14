import mongoose from "mongoose";
import { TerrorMessages } from "../interface/error";


const handleValidationError = (err: mongoose.Error.ValidationError) => {

const errorMessages: TerrorMessages = Object.values(err.errors).map(
    (val: mongoose.Error.ValidationError | mongoose.Error.CastError) => {

    return {
        path: val?.path,
        message: val?.message
    };

},

)


const statusCode = 400;

return {
    statusCode,
    message: "Validation Error",
    errorMessages
}
}


export default handleValidationError;