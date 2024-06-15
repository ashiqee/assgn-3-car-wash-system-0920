"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSlotsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const serviceSlots_controllers_1 = require("./serviceSlots.controllers");
const router = express_1.default.Router();
router.get('/', serviceSlots_controllers_1.ServiceSlotsController.getAllServiceSlot);
exports.ServiceSlotsRoutes = router;
