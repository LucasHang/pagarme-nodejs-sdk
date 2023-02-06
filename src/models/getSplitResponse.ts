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
  GetRecipientResponse,
  getRecipientResponseSchema,
} from './getRecipientResponse';
import {
  GetSplitOptionsResponse,
  getSplitOptionsResponseSchema,
} from './getSplitOptionsResponse';

/** Split response */
export interface GetSplitResponse {
  /** Type */
  type?: string | null;
  /** Amount */
  amount?: number | null;
  /** Recipient */
  recipient?: GetRecipientResponse | null;
  /** The split rule gateway id */
  gatewayId?: string | null;
  options?: GetSplitOptionsResponse | null;
  id?: string | null;
}

export const getSplitResponseSchema: Schema<GetSplitResponse> = object({
  type: ['type', optional(nullable(string()))],
  amount: ['amount', optional(nullable(number()))],
  recipient: [
    'recipient',
    optional(nullable(lazy(() => getRecipientResponseSchema))),
  ],
  gatewayId: ['gateway_id', optional(nullable(string()))],
  options: [
    'options',
    optional(nullable(lazy(() => getSplitOptionsResponseSchema))),
  ],
  id: ['id', optional(nullable(string()))],
});
