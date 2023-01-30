/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of Custom
 */
interface Custom {
  message: string | null;
  errors?: unknown | null;
  request?: unknown | null;
}

export class CustomError extends ApiError<Custom> {}