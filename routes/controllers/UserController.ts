import {Request, Response, Router} from 'express';
import {Userservice} from "../services/Userservice";

class UserController {
  private userService = new Userservice();

  public index = async (req: Request, res: Response) => {
    const result: string = await this.userService.index();
    res.send('hello' + result);
  }
}

export default new UserController();