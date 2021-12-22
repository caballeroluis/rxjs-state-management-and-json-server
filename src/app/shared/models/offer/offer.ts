import { User } from '@shared/models';

export class Offer {
  
  creationDate?: Date;
  salary?: number;
  title?: string;
  requirements?: string;
  abandoned?: boolean;
  workplaceAddress?: string;
  videoCallLink?: string;
  description?: string;
  status?: string;
  recruiter?: User;
  worker?: User;

}
