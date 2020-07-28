import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../Context";
import { responseErrorHandler } from "../errorHandlerApi";
import { IPrice } from "../types";
import offerValidator from "../validators/OfferValidator";

class OfferController {
  /**
   * Get availiable Offer list
   *
   * @export
   * @param {Request} req
   * @param {Response} res
   */
  async getAvailiableOfferList(req: Request, res: Response) {
    const listOffer = await Context.getInstance().db.offer.find({});

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

  /**
   * Calculate the call price
   *
   * @param {Request} req
   * @param {Response} res
   * @memberof OfferController
   */
  async calculateCallPrice(req: Request, res: Response) {
    try {
      const { minutes: qsMinutes } = req.query;
      const minutes = parseInt(qsMinutes as string, 10);

      const { dddFee, offer } = await offerValidator.validateCalculateCallRequest(req);

      const feeAmount = dddFee.amount + (dddFee.amount * 10) / 100;
      const excedentMinutes = Math.max(0, minutes - offer.freeMinutes);
      const totalAmount = excedentMinutes * feeAmount;

      res.status(HTTPStatus.OK).json({
        data: {
          comFaleMais: (totalAmount / 100).toFixed(2),
          semFaleMais: ((minutes * dddFee.amount) / 100).toFixed(2),
        } as IPrice,
        message: "OK",
      });
    } catch (err) {
      console.error(err);
      responseErrorHandler(err, res);
    }
  }
}
export default new OfferController();
