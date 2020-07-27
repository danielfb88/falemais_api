import { Request, Response } from "express";
import { DDDFeeController } from "../controllers/DDDFeeController";

class DDDFeeRoute {
  controller: DDDFeeController = new DDDFeeController();

  /**
   * Get route for availiable DDD list
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof DDDFeeRoute
   */
  async getAvailiableDDDList(req: Request, res: Response) {
    return this.controller.getAvailiableDDDList(req, res);
  }
}

export default new DDDFeeRoute();
