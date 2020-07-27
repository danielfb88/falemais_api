import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../context";
import { responseErrorHandler } from "../errorHandlerApi";

class OfferController {
  /**
   * Get availiable Offer list
   *
   * @export
   * @param {Request} req
   * @param {Response} res
   */
  async getAvailiableOfferList(req: Request, res: Response) {
    const listOffer = await Context.getInstance().db.offerRepository.find({});

    try {
      res.status(HTTPStatus.OK).json({
        data: listOffer,
        message: "OK",
      });
    } catch (err) {
      console.error(err);
      responseErrorHandler(err, res);
    }
  }
}
export default new OfferController();
