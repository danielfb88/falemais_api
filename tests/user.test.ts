import * as HTTPStatus from "http-status";
import App from "../src/app";
import { IContext } from "../src/context";
import "../src/controllers";
import { makeCtx } from "./helpers";
import { mockUser } from "./mock/objectMocks";
const supertest = require("supertest");

let ctx: IContext;
const app = App;
const request = supertest;

describe("User tests", () => {
  beforeAll(() => {
    ctx = makeCtx({});
  });

  beforeEach(async () => {
    await ctx.db.users.delete({});
  });

  describe("GET /api/user/all", () => {
    test("Get users (no auth required): returns a list of all users", async done => {
      await ctx.db.users.insert(mockUser());

      request(app)
        .get("/api/user/all")
        .end((error: any, res: any) => {
          const { data } = res.body;

          expect(res.status).toEqual(HTTPStatus.OK);
          expect(data).toHaveLength(1);
          done();
        });
    });
  });
});
