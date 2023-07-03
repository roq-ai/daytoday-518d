import { BusinessInterface } from 'interfaces/business';
import { GetQueryInterface } from 'interfaces';

export interface AnalyticsInterface {
  id?: string;
  business_id: string;
  views: number;
  clicks: number;
  sales: number;
  created_at?: any;
  updated_at?: any;

  business?: BusinessInterface;
  _count?: {};
}

export interface AnalyticsGetQueryInterface extends GetQueryInterface {
  id?: string;
  business_id?: string;
}
