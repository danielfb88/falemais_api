import { EntityRepository, Repository } from "typeorm";
import { Offer } from "../models";

@EntityRepository(Offer)
export class OfferRepository extends Repository<Offer> {}
