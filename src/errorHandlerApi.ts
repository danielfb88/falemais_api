import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import * as HTTPStatus from "http-status";
import { InvalidArgumentError } from "./errors/InvalidArgumentError";
import { NotFoundError } from "./errors/NotFoundError";

/**
 * Response for Internal Error
 *
 * @export
 * @param {Response} res
 */
export function internalErrorResponse(res: Response) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ errorCode: "ERR-001", message: "Server internal error" });
}

/**
 * Response for Not found Error
 *
 * @export
 * @param {Response} res
 * @param {string} objName
 */
export function notFoundResponse(res: Response, objName: string | undefined) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ errorCode: "ERR-002", message: `${objName} not found` });
}

/**
 * Response for unauthorized login
 *
 * @export
 * @param {Response} res
 */
export function unauthorizedLoginResponse(res: Response) {
  console.log(`*** Authentication failed ***`);
  res.status(HTTPStatus.UNAUTHORIZED).json({ message: "Authentication failed. User or Password invalid." });
}

/**
 * Response for unauthorized token
 *
 * @export
 * @param {Response} res
 */
export function unauthorizedTokenResponse(res: Response) {
  console.log(`*** Authentication failed ***`);
  res.status(HTTPStatus.UNAUTHORIZED).json({ message: "Authentication failed. Token invalid." });
}

/**
 * Response for duplicated resource
 *
 * @export
 * @param {Response} res
 */
export function duplicatedResourceResponse(res: Response) {
  res.status(HTTPStatus.UNAUTHORIZED).json({ message: "Duplicated resource" });
}

/**
 * Response for invalid argument
 *
 * @export
 * @param {Response} res
 */
export function invalidArgumentResponse(res: Response) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ message: "Invalid argument" });
}

/**
 * Error handler
 *
 * @export
 * @param {ErrorRequestHandler} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export function errorHandlerApi(err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
  console.error(`API error handler was executed: ${err}`);
  internalErrorResponse(res);
}

/**
 * Error handler for responses
 *
 * @export
 * @param {Error} err
 * @param {Response} res
 * @param {string} ObjName
 */
export function responseErrorHandler(err: Error, res: Response, ObjName?: string) {
  if (err instanceof NotFoundError) {
    notFoundResponse(res, ObjName);
  } else if (err instanceof InvalidArgumentError) {
    invalidArgumentResponse(res);
  } else {
    internalErrorResponse(res);
  }
}
