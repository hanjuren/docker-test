import {Request, Response} from "express";

export class Userservice {
  public index = async (): Promise<string> => {
    return 'hello World';
  }
}