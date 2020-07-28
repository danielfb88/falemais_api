import * as express from "express";
import { Connection } from "typeorm";
import { DDDFeeRepository, OfferRepository } from "./repositories";

export interface IContext {
  captureException(error: Error): void;
  app: express.Application;
  db: {
    connection: Connection;
    dddFee: DDDFeeRepository;
    offer: OfferRepository;
  };
}

export class Context {
  private static instance: IContext;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): IContext {
    if (Context.instance === undefined) {
      throw Error("Context not created yet");
    }

    return Context.instance;
  }

  public static createContext(args: { connection: Connection; app: express.Application }) {
    const { connection, app } = args;

    Context.instance = {
      app,
      captureException: () => null,
      db: {
        connection,
        dddFee: connection.getCustomRepository(DDDFeeRepository),
        offer: connection.getCustomRepository(OfferRepository),
      },
    };
  }
}
