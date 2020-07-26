import { Application } from "express";
import * as userRoutes from "./routes/userRoute";

export function initRoutes(app: Application): void {
  app.route("/api/user/all").get(userRoutes.getAll);
}
