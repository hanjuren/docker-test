import express, { Request, Response } from 'express';
import Controller from './routes/index';
import UserController from "./routes/controllers/UserController";
import 'dotenv/config'
class App {
  public express: express.Application;
  public port: number;

  constructor(port: number, controller: Controller[]) {
    this.express = express();
    this.port = port;
    this.initialiseController(controller);
  }

  private expressSetting (): void {
    this.express.use(express.json());
  }
  private dataBaseConnect (): void {}

  private initialiseController (controller: Controller[]): void {
    controller.forEach((controller: Controller) => {
      this.express.use('/api/v1', controller.router);
    });
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log('express server starting');
    });
  }
}

const app = new App(Number(process.env.PORT), [new UserController()]);

app.listen();