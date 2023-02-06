/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface GetSplitOptionsResponse {
  liable?: boolean | null;
  chargeProcessingFee?: boolean | null;
  chargeRemainderFee?: string | null;
}

export const getSplitOptionsResponseSchema: Schema<GetSplitOptionsResponse> = object(
  {
    liable: ['liable', optional(nullable(boolean()))],
    chargeProcessingFee: [
      'charge_processing_fee',
      optional(nullable(boolean())),
    ],
    chargeRemainderFee: ['charge_remainder_fee', optional(nullable(string()))],
  }
);
