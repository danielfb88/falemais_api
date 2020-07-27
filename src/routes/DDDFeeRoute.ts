import { Request, Response } from "express";
import { DDDFeeController } from "../controllers/DDDFeeController";

export class DDDFeeRoute {
  controller: DDDFeeController = new DDDFeeController();

  async getDDDList(req: Request, res: Response) {
    return this.controller.getDDDList(req, res);
  }
}
