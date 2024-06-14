
import  express  from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { BookingValidation } from './booking.validation';
import { BookingControllers } from './booking.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';





const router = express.Router()



router.post('/',auth(USER_ROLE.admin), validateRequest(BookingValidation.createBookingValidationSchema),
BookingControllers.createServiceBooking)


export const serviceBookingRoutes = router;