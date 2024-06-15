"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const service_route_1 = require("../modules/Services/service.route");
const serviceSlots_route_1 = require("../modules/serviceSlots/serviceSlots.route");
const booking_route_1 = require("../modules/booking/booking.route");
const myBooking_route_1 = require("../modules/myBooking/myBooking.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/services",
        route: service_route_1.ServiceRoutes,
    },
    {
        path: "/slots/availability",
        route: serviceSlots_route_1.ServiceSlotsRoutes,
    },
    {
        path: "/bookings",
        route: booking_route_1.serviceBookingRoutes,
    },
    {
        path: "/my-bookings",
        route: myBooking_route_1.myBookingRoutes,
    }
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
