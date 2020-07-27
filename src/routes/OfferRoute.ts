import { Request, Response } from "express";
import offerController from "../controllers/OfferController";

class OfferRoute {
  /**
   * Get route for availiable Offer list
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof DDDFeeRoute
   */
  async getAvailiableOfferList(req: Request, res: Response) {
    return offerController.getAvailiableOfferList(req, res);
  }

  /**
   * Get route for calculate the call price
   *
   * @param {Request} req
   * @param {Response} res
   * @returns
   * @memberof OfferRoute
   */
  async calculateCallPrice(req: Request, res: Response) {
    return offerController.calculateCallPrice(req, res);
  }
}

export default new OfferRoute();
