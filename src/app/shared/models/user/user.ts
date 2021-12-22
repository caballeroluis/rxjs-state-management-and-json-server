import { Offer } from '@shared/models';
export class User {

  id!: string;
  _id!: string;
  email!: string;
  name?: string;
  corporationName?: string;
  descriptionCorporate?: string;
  international?: boolean;
  recruiterName?: string;
  active?: string;
  role?: string;
  creationDate?: string;
  password?: string;
  offers?: Offer[];

  constructor() {
    this.offers = [];
  }

}
