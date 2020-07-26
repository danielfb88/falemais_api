import { EntityRepository, Repository } from "typeorm";
import { DDDFee } from "../models";

@EntityRepository(DDDFee)
export class DDDFeeRepository extends Repository<DDDFee> {}
