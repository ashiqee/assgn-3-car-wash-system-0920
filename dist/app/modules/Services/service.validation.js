"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const createServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().nonempty({ message: 'Name is required' }),
        description: zod_1.z.string(),
        price: zod_1.z.number().min(0, { message: "price must be 0 to start" }),
        duration: zod_1.z.number()
    })
});
const updateServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0, { message: "price must be 0 to start" }).optional(),
        duration: zod_1.z.number().optional()
    })
});
const createServiceSlotSchema = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string(),
        date: zod_1.z.string(),
        startTime: zod_1.z.string(),
        endTime: zod_1.z.string()
    })
});
exports.ServiceValidation = {
    createServiceValidationSchema,
    createServiceSlotSchema,
    updateServiceValidationSchema
};
