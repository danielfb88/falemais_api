import { Context } from "../context";
import { DDDFee } from "../models";
import { IDDD } from "../types";

class DDDFeeService {
  /**
   * Get list of unique DDD of 'from' field
   *
   * @param {DDDFee[]} listDDDFee
   * @returns
   * @memberof DDDFeeService
   */
  getListDDDUniqueFrom(listDDDFee: DDDFee[]) {
    const listDDDUniqueFrom: string[] = [];

    for (const dddFee of listDDDFee) {
      if (!listDDDUniqueFrom.includes(dddFee.fromDDD)) {
        listDDDUniqueFrom.push(dddFee.fromDDD);
      }
    }

    return listDDDUniqueFrom;
  }

  /**
   * Get DDD list
   *
   * @returns
   * @memberof DDDFeeService
   */
  async getListDDD() {
    const listDDDFee = await Context.getInstance().db.dddFee.find({});

    const listDDDUniqueFrom = this.getListDDDUniqueFrom(listDDDFee);

    const listDDD: IDDD[] = [];

    for (const dddUniqueFrom of listDDDUniqueFrom) {
      const listToDDD: string[] = [];

      for (const dddFee of listDDDFee) {
        if (dddUniqueFrom === dddFee.fromDDD) {
          listToDDD.push(dddFee.toDDD);
        }
      }

      listDDD.push({
        fromDDD: dddUniqueFrom,
        toDDD: listToDDD,
      });
    }

    return listDDD;
  }
}

export default new DDDFeeService();
