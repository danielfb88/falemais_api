import { Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { Context } from "../context";
import { responseErrorHandler } from "../errorHandlerApi";

/**
 * Returns a list of all users
 *
 * @export
 * @param {Request} req
 * @param {Response} res
 */
export async function getAll(req: Request, res: Response) {
  try {
    const users = await Context.getInstance().db.users.find({});

    res.status(HTTPStatus.OK).json({
      data: users,
      message: "OK",
    });
  } catch (err) {
    console.error(err);
    responseErrorHandler(err, res, "User");
  }
}
