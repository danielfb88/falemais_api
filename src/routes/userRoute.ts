import { Request, Response } from "express";
import * as userController from "../controllers/userController";

export async function getAll(req: Request, res: Response) {
  return userController.getAll(req, res);
}
