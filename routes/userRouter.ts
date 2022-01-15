import express, { Router } from "express";
import {Userservice} from "./services/Userservice";

class UserRouter {
  public router = express.Router();
  private readonly userService = new Userservice();
  constructor() {
    this.routes();
  }

  public routes() {
    this.router.get('/users', this.userService.index)
  }
}


export default new UserRouter();
