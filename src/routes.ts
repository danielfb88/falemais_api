import { Application } from "express";
import dddFeeRoute from "./routes/DDDFeeRoute";

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
  }
}

export default new Routes();
