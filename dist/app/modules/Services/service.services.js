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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const service_model_1 = require("./service.model");
const serviceSlots_model_1 = require("../serviceSlots/serviceSlots.model");
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExists = yield service_model_1.Service.findOne({ name: payload.name });
    if (isServiceExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Same Service Name already exist');
    }
    const result = yield service_model_1.Service.create(payload);
    return result;
});
// get all services
const getAllServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.find();
    return result;
});
// get a service
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findById(id);
    return result;
});
// update services
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExists = yield service_model_1.Service.findById(id);
    if (!isServiceExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This service is not found');
    }
    const remainingServiceData = __rest(payload, []);
    const modifiedUpdateData = Object.assign({}, remainingServiceData);
    const result = yield service_model_1.Service.findByIdAndUpdate(id, modifiedUpdateData, {
        new: true,
        runValidators: true,
    });
    return result;
});
// delete service
const deleteServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExists = yield service_model_1.Service.findById(id);
    if (!isServiceExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Service does not exist');
    }
    const result = yield service_model_1.Service.findByIdAndUpdate(id, {
        isDeleted: true,
    }, { new: true });
    return result;
});
//create service slot create 
const createServiceSlotInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceSlots_model_1.ServicesSlot.create(payload);
    return result;
});
exports.Services = {
    createServiceIntoDB,
    getAllServicesFromDB,
    getSingleServiceFromDB,
    updateServiceIntoDB,
    deleteServiceFromDB,
    createServiceSlotInDB
};
