/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetCheckoutCardInstallmentOptionsResponse,
  getCheckoutCardInstallmentOptionsResponseSchema,
} from './getCheckoutCardInstallmentOptionsResponse';
import {
  GetPaymentAuthenticationResponse,
  getPaymentAuthenticationResponseSchema,
} from './getPaymentAuthenticationResponse';

export interface GetCheckoutCreditCardPaymentResponse {
  /** Descrição na fatura */
  statementDescriptor?: string | null;
  /** Parcelas */
  installments?: GetCheckoutCardInstallmentOptionsResponse[] | null;
  /** Payment Authentication response */
  authentication?: GetPaymentAuthenticationResponse | null;
}

export const getCheckoutCreditCardPaymentResponseSchema: Schema<GetCheckoutCreditCardPaymentResponse> = object(
  {
    statementDescriptor: ['statementDescriptor', optional(nullable(string()))],
    installments: [
      'installments',
      optional(
        nullable(
          array(lazy(() => getCheckoutCardInstallmentOptionsResponseSchema))
        )
      ),
    ],
    authentication: [
      'authentication',
      optional(nullable(lazy(() => getPaymentAuthenticationResponseSchema))),
    ],
  }
);
