/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

/** Information about the recipient on the gateway */
export interface GetGatewayRecipientResponse {
  /** Gateway name */
  gateway?: string | null;
  /** Status of the recipient on the gateway */
  status?: string | null;
  /** Recipient id on the gateway */
  pgid?: string | null;
  /** Creation date */
  createdAt?: string | null;
  /** Last update date */
  updatedAt?: string | null;
}

export const getGatewayRecipientResponseSchema: Schema<GetGatewayRecipientResponse> = object(
  {
    gateway: ['gateway', optional(nullable(string()))],
    status: ['status', optional(nullable(string()))],
    pgid: ['pgid', optional(nullable(string()))],
    createdAt: ['created_at', optional(nullable(string()))],
    updatedAt: ['updated_at', optional(nullable(string()))],
  }
);
