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
exports.slotsServices = void 0;
const serviceSlots_model_1 = require("./serviceSlots.model");
// get all services
const getAllServicesSlotFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, serviceId } = payload;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query = { isBooked: { $eq: "available" } };
    if (date) {
        query.date = date;
    }
    if (serviceId) {
        query.service = serviceId;
    }
    const result = yield serviceSlots_model_1.ServicesSlot.find(query).populate('service');
    return result;
});
exports.slotsServices = {
    getAllServicesSlotFromDB
};
