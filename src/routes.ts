import { Application } from "express";
import { DDDFeeRoute } from "./routes/DDDFeeRoute";

class Routes {
  dddFeeRoute = new DDDFeeRoute();

  initRoutes(app: Application): void {
    app.route("/api/ddd").get((req, res) => {
      this.dddFeeRoute.getDDDList(req, res);
    });
  }
}

export default new Routes();
