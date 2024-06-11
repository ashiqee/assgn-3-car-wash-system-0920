import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";



const router = Router()





const moduleRoutes = [
    {
        path:'/user',
        route: UserRoutes,
    }
]


moduleRoutes.forEach((route)=>{
    router.use(route.path,router.route)
})


export default router;