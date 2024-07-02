"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceBookings = void 0;
const booking_model_1 = require("./booking.model");
const createServiceBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.ServiceBooking.create(payload);
    const populateBooking = yield booking_model_1.ServiceBooking.findById(result._id)
        .populate('customer service slot', '-role -__v -createdAt -updatedAt').exec();
    return populateBooking;
});
//get all booking admin
const getAllServiceBookingFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = booking_model_1.ServiceBooking.find()
        .populate('customer service slot', '-role -__v -createdAt -updatedAt').select('-__v');
    return result;
});
//get users all booking get user
const getUsersBookingsFromDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.ServiceBooking.find({ customer: userId })
        .populate('service slot', '-__v -createdAt -updatedAt').select('-customer -__v');
    return result;
});
exports.serviceBookings = {
    createServiceBookingIntoDB,
    getAllServiceBookingFromDB,
    getUsersBookingsFromDB
};
