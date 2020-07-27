import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { responseErrorHandler } from "../errorHandlerApi";
import dddFeeService from "../services/DDDFeeService";

export class DDDFeeController {
  /**
   * Get availiable DDD list
   *
   * @export
   * @param {Request} req
   * @param {Response} res
   */
  async getAvailiableDDDList(req: Request, res: Response) {
    try {
      res.status(HTTPStatus.OK).json({
        data: await dddFeeService.getListDDD(),
        message: "OK",
      });
    } catch (err) {
      console.error(err);
      responseErrorHandler(err, res);
    }
  }
}
