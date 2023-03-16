/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

/** Pix Additional Information */
export interface PixAdditionalInformation {
  name?: string | null;
  value?: string | null;
}

export const pixAdditionalInformationSchema: Schema<PixAdditionalInformation> = object(
  {
    name: ['Name', optional(nullable(string()))],
    value: ['Value', optional(nullable(string()))],
  }
);
