import App from "../src/app";
import { IContext } from "../src/context";
import { IDDD } from "../src/types";
import { makeCtx } from "./helpers";
const supertest = require("supertest");

let ctx: IContext;
const app = App;
const request = supertest;

describe("Integration tests", () => {
  beforeAll(() => {
    ctx = makeCtx({});
  });

  describe("GET /api/ddd/availiable", () => {
    test("Get all availiable DDD", done => {
      // Creating an user
      request(app)
        .get("/api/ddd/availiable")
        .end((error: Error, res: any) => {
          const listDDD: IDDD[] = res.body.data;

          expect(listDDD).toHaveLength(4);
          expect(listDDD[0].toDDD).toHaveLength(3);
          expect(listDDD[1].toDDD).toHaveLength(1);
          expect(listDDD[2].toDDD).toHaveLength(1);
          expect(listDDD[3].toDDD).toHaveLength(1);

          done();
        });
    });
  });
});
