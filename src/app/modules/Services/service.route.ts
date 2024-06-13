
import  express  from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { ServiceValidation } from './service.validation';
import { ServicesController } from './service.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';



const router = express.Router()



router.post('/',auth(USER_ROLE.admin) ,validateRequest(ServiceValidation.createServiceValidationSchema), ServicesController.CreateService)

router.get('/',auth(USER_ROLE.admin),ServicesController.getAllServices)


export const ServiceRoutes = router;