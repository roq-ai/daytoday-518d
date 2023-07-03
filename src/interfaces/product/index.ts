import { OrderInterface } from 'interfaces/order';
import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  business_id: string;
  created_at?: any;
  updated_at?: any;
  order?: OrderInterface[];
  business?: BusinessInterface;
  _count?: {
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  business_id?: string;
}
