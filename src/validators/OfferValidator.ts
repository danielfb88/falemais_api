import { Request } from "express";
import { Context } from "../Context";
import { MissingArgumentError, NotFoundError } from "../errors";

class OfferValidator {
  async validateCalculateCallRequest(req: Request) {
    const { from: qsFrom, to: qsTo, offer: qsOffer, minutes: qsMinutes } = req.query;

    if (!qsFrom) {
      throw new MissingArgumentError("Missing argument: 'from'");
    }

    if (!qsTo) {
      throw new MissingArgumentError("Missing argument: 'to'");
    }

    if (!qsOffer) {
      throw new MissingArgumentError("Missing argument: 'offer'");
    }

    if (!qsMinutes) {
      throw new MissingArgumentError("Missing argument: 'minutes'");
    }

    const offer = await Context.getInstance().db.offer.findOne({
      where: {
        simpleName: qsOffer,
      },
    });

    const dddFee = await Context.getInstance().db.dddFee.findOne({
      where: {
        fromDDD: qsFrom,
        toDDD: qsTo,
      },
    });

    if (!offer) {
      throw new NotFoundError("Offer not found");
    }

    if (!dddFee) {
      throw new NotFoundError("DDD Fee not found");
    }

    return {
      dddFee,
      offer,
    };
  }
}
export default new OfferValidator();
