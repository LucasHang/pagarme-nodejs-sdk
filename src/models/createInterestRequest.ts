/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

/** Interest Request */
export interface CreateInterestRequest {
  /** Days */
  days: number;
  /** Type */
  type: string;
  /** Amount */
  amount: number;
}

export const createInterestRequestSchema: Schema<CreateInterestRequest> = object(
  {
    days: ['days', number()],
    type: ['type', string()],
    amount: ['amount', number()],
  }
);