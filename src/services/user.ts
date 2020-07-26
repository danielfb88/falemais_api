import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { Context } from "../context";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/UnauthorizedError";

/**
 * Get user by name
 *
 * @export
 * @param {string} userName
 * @returns
 */
export async function getUserByName(userName: string) {
  const user = await Context.getInstance().db.users.findOne({ userName });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
}

/**
 * Authenticate token
 *
 * @export
 * @param {Request} req
 * @returns
 */
export async function authenticateToken(req: Request) {
  const token = req.headers["x-access-token"];

  if (!token) {
    throw new UnauthorizedError();
  }

  const user = await Context.getInstance().db.users.findOne({ mobileToken: token as string });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  const decoded = jwt.verify(token as string, Context.getInstance().app.get("secret"));

  if (!decoded) {
    throw new UnauthorizedError("Unauthorized token");
  }

  return { loggedUser: user, token };
}
