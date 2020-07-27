import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../context";
import { responseErrorHandler } from "../errorHandlerApi";

export class DDDFeeController {
  /**
   * Returns DDD list
   *
   * @export
   * @param {Request} req
   * @param {Response} res
   */
  async getDDDList(req: Request, res: Response) {
    try {
      const listDddFee = await Context.getInstance().db.dddFeeRepository.find({});

      res.status(HTTPStatus.OK).json({
        data: listDddFee,
        message: "OK",
      });
    } catch (err) {
      console.error(err);
      responseErrorHandler(err, res, "DDDFee");
    }
  }
}
