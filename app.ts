import express, { Request, Response } from 'express';
import Controller from './routes/index';
import UserController from "./routes/controllers/UserController";
import AuthController from "./routes/controllers/AuthController";
import { createConnection, Connection } from "typeorm";
import 'dotenv/config'
import cors from 'cors';

class App {
  public express: express.Application;
  public port: number;

  constructor(port: number, controller: Controller[]) {
    this.express = express();
    this.port = port;
    this.initialiseController(controller);
    this.initialiseTypeOrm();
  }

  private expressSetting (): void {
    this.express.use(express.json());
    this.express.use(cors);
  }

  private initialiseTypeOrm (): void {
    createConnection().then(async (connection: Connection) => {
      console.log("Entity connected : " + connection.isConnected);
    })
      .catch((err: Error) => {
        console.log("TypeORM Connection Error : " + err.message);
      });
  }

  private initialiseController (controller: Controller[]): void {
    controller.forEach((controller: Controller) => {
      this.express.use('/api/v1', controller.router);
    });
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log('express server starting' + this.port);
    });
  }
}

const app = new App(Number(process.env.PORT),
  [
    new UserController(),
    new AuthController(),
  ]);

app.listen();