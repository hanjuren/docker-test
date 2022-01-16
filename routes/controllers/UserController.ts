import {NextFunction, Request, Response, Router} from 'express';
import Controller from "../index";
import UserService from "../services/Userservice";

class UserController implements Controller {
  public path: string = '/users';
  public router: Router = Router();
  private userService: UserService;

  constructor() {
    this.initialiseRoutes();
    this.userService = new UserService();
  }

  private initialiseRoutes (): void {
    this.router.get(this.path, this.getUsers);
  }

  private getUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const result = await this.userService.index();
    res.send(result);
  }
}

export default UserController;