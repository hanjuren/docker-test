import express, {Request, Response, Router} from "express";
import UserRouter from "./userRouter";

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('dafdafda');
});

router.use('/users', UserRouter)


export default router;