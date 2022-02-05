import Controller from "../index";
import {NextFunction, Request, Response, Router} from "express";
import AuthService from "../services/AuthService";

class AuthController implements Controller {
  public path: string = '/';
  public router: Router = Router();
  private authService: AuthService;

  constructor() {
    this.initialiseRoutes();
    this.authService = new AuthService();
  }

  private initialiseRoutes (): void {
    this.router.get(`${this.path}hanjuren`, this.login);
  }

  private login = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      console.log('요청 성공');
      const data = await this.authService.login();
      res.json({ result: data });
    } catch (err) {
      console.log(err);
    }
  }
}

export default AuthController;