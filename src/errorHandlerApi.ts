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
 * @param {string} message
 */
export function notFoundResponse(res: Response, message: string) {
  res.status(HTTPStatus.INTERNAL_SERVER_ERROR).json({ errorCode: "ERR-002", message });
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
export function responseErrorHandler(err: Error, res: Response) {
  if (err instanceof NotFoundError) {
    notFoundResponse(res, err.message);
  } else if (err instanceof InvalidArgumentError) {
    invalidArgumentResponse(res);
  } else {
    internalErrorResponse(res);
  }
}
