import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  guest_id: string;
  restaurant_id: string;
  table_number: number;
  reservation_time: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  guest_id?: string;
  restaurant_id?: string;
}
