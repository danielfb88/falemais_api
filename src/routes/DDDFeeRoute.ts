import { Request, Response } from "express";
import dddFeeController from "../controllers/DDDFeeController";

class DDDFeeRoute {
  /**
   * Get route for availiable DDD list
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof DDDFeeRoute
   */
  async getAvailiableDDDList(req: Request, res: Response) {
    return dddFeeController.getAvailiableDDDList(req, res);
  }
}

export default new DDDFeeRoute();
