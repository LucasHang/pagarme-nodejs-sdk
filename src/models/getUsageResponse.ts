/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetSubscriptionItemResponse,
  getSubscriptionItemResponseSchema,
} from './getSubscriptionItemResponse';

/** Response object for getting a usage */
export interface GetUsageResponse {
  /** Id */
  id?: string | null;
  /** Quantity */
  quantity?: number | null;
  /** Description */
  description?: string | null;
  /** Used at */
  usedAt?: string | null;
  /** Creation date */
  createdAt?: string | null;
  /** Status */
  status?: string | null;
  deletedAt?: string | null;
  /** Subscription item */
  subscriptionItem?: GetSubscriptionItemResponse | null;
  /** Identification code in the client system */
  code?: string | null;
  /** Identification group in the client system */
  group?: string | null;
  /** Field used in item scheme type 'Percent' */
  amount?: number | null;
}

export const getUsageResponseSchema: Schema<GetUsageResponse> = object({
  id: ['id', optional(nullable(string()))],
  quantity: ['quantity', optional(nullable(number()))],
  description: ['description', optional(nullable(string()))],
  usedAt: ['used_at', optional(nullable(string()))],
  createdAt: ['created_at', optional(nullable(string()))],
  status: ['status', optional(nullable(string()))],
  deletedAt: ['deleted_at', optional(nullable(string()))],
  subscriptionItem: [
    'subscription_item',
    optional(nullable(lazy(() => getSubscriptionItemResponseSchema))),
  ],
  code: ['code', optional(nullable(string()))],
  group: ['group', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
});
