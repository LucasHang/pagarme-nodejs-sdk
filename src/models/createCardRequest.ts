/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateAddressRequest,
  createAddressRequestSchema,
} from './createAddressRequest';
import {
  CreateCardOptionsRequest,
  createCardOptionsRequestSchema,
} from './createCardOptionsRequest';

/** Card data */
export interface CreateCardRequest {
  /** Credit card number */
  number: string;
  /** Holder name, as written on the card */
  holderName: string;
  /** The expiration month */
  expMonth: number;
  /** The expiration year, that can be informed with 2 or 4 digits */
  expYear: number;
  /** The card's security code */
  cvv: string;
  /** Card's billing address */
  billingAddress: CreateAddressRequest;
  /** Card brand */
  brand: string;
  /** The address id for the billing address */
  billingAddressId: string;
  /** Metadata */
  metadata: Record<string, string>;
  /** Card type */
  type: string;
  /** Options for creating the card */
  options: CreateCardOptionsRequest;
  /** Document number for the card's holder */
  holderDocument?: string;
  /** Indicates whether it is a private label card */
  privateLabel: boolean;
  label: string;
  /** Identifier */
  id?: string;
  /** token identifier */
  token?: string;
}

export const createCardRequestSchema: Schema<CreateCardRequest> = object({
  number: ['number', string()],
  holderName: ['holder_name', string()],
  expMonth: ['exp_month', number()],
  expYear: ['exp_year', number()],
  cvv: ['cvv', string()],
  billingAddress: ['billing_address', lazy(() => createAddressRequestSchema)],
  brand: ['brand', string()],
  billingAddressId: ['billing_address_id', string()],
  metadata: ['metadata', dict(string())],
  type: ['type', string()],
  options: ['options', lazy(() => createCardOptionsRequestSchema)],
  holderDocument: ['holder_document', optional(string())],
  privateLabel: ['private_label', boolean()],
  label: ['label', string()],
  id: ['id', optional(string())],
  token: ['token', optional(string())],
});