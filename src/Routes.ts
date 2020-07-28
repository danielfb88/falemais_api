import { Application } from "express";
import dddFeeRoute from "./routes/DDDFeeRoute";
import offerRoute from "./routes/OfferRoute";

class Routes {
  /**
   * Initialize routes
   *
   * @param {Application} app
   * @memberof Routes
   */
  initRoutes(app: Application): void {
    app.route("/api/ddd/availiable").get((req, res) => {
      dddFeeRoute.getAvailiableDDDList(req, res);
    });

    app.route("/api/offer/availiable").get((req, res) => {
      offerRoute.getAvailiableOfferList(req, res);
    });

    app.route("/api/offer/callprice").get((req, res) => {
      offerRoute.calculateCallPrice(req, res);
    });
  }
}

export default new Routes();
