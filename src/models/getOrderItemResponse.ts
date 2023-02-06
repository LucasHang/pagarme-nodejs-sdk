/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

/** Response object for getting an order item */
export interface GetOrderItemResponse {
  /** Id */
  id?: string | null;
  amount?: number | null;
  description?: string | null;
  quantity?: number | null;
  /** Category */
  category?: string | null;
  /** Code */
  code?: string | null;
}

export const getOrderItemResponseSchema: Schema<GetOrderItemResponse> = object({
  id: ['id', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  description: ['description', optional(nullable(string()))],
  quantity: ['quantity', optional(nullable(number()))],
  category: ['category', optional(nullable(string()))],
  code: ['code', optional(nullable(string()))],
});
