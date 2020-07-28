import App from "../src/app";
import { IContext } from "../src/context";
import { Offer } from "../src/models";
import { IDDD, IPrice } from "../src/types";
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

  describe("GET /api/offer/availiable", () => {
    test("Get all availiable Offers", done => {
      request(app)
        .get("/api/offer/availiable")
        .end((error: Error, res: any) => {
          const listOffer: Offer[] = res.body.data;

          expect(listOffer).toHaveLength(3);
          expect(listOffer[0].simpleName).toEqual("fm30");
          expect(listOffer[1].simpleName).toEqual("fm60");
          expect(listOffer[2].simpleName).toEqual("fm120");

          done();
        });
    });
  });

  describe("GET /api/offer/callprice", () => {
    test("FromDDD: 011 / ToDDD: 016 / Minutes: 20 / Offer: FaleMais 30 / ComFaleMais: $ 0,00 / SemFaleMais: $ 38,00", done => {
      request(app)
        .get("/api/offer/callprice")
        .query({ from: "011", minutes: "20", offer: "fm30", to: "016" })
        .end((error: Error, res: any) => {
          const price: IPrice = res.body.data;

          expect(price.comFaleMais).toEqual("0.00");
          expect(price.semFaleMais).toEqual("38.00");

          done();
        });
    });
  });

  test("FromDDD: 011 / ToDDD: 017 / Minutes: 80 / Offer: FaleMais 60 / ComFaleMais: $ 37,40 / SemFaleMais: $ 136,00", done => {
    request(app)
      .get("/api/offer/callprice")
      .query({ from: "011", minutes: "80", offer: "fm60", to: "017" })
      .end((error: Error, res: any) => {
        const price: IPrice = res.body.data;

        expect(price.comFaleMais).toEqual("37.40");
        expect(price.semFaleMais).toEqual("136.00");

        done();
      });
  });

  test("FromDDD: 018 / ToDDD: 011 / Minutes: 200 / Offer: FaleMais 120 / ComFaleMais: $ 167,20 / SemFaleMais: $ 380,00", done => {
    request(app)
      .get("/api/offer/callprice")
      .query({ from: "018", minutes: "200", offer: "fm120", to: "011" })
      .end((error: Error, res: any) => {
        const price: IPrice = res.body.data;

        expect(price.comFaleMais).toEqual("167.20");
        expect(price.semFaleMais).toEqual("380.00");

        done();
      });
  });
});
