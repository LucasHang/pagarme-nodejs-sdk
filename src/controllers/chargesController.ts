/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateCancelChargeRequest,
  createCancelChargeRequestSchema,
} from '../models/createCancelChargeRequest';
import {
  CreateCaptureChargeRequest,
  createCaptureChargeRequestSchema,
} from '../models/createCaptureChargeRequest';
import {
  CreateChargeRequest,
  createChargeRequestSchema,
} from '../models/createChargeRequest';
import {
  CreateConfirmPaymentRequest,
  createConfirmPaymentRequestSchema,
} from '../models/createConfirmPaymentRequest';
import {
  GetChargeResponse,
  getChargeResponseSchema,
} from '../models/getChargeResponse';
import {
  GetChargesSummaryResponse,
  getChargesSummaryResponseSchema,
} from '../models/getChargesSummaryResponse';
import {
  ListChargesResponse,
  listChargesResponseSchema,
} from '../models/listChargesResponse';
import {
  ListChargeTransactionsResponse,
  listChargeTransactionsResponseSchema,
} from '../models/listChargeTransactionsResponse';
import {
  UpdateChargeCardRequest,
  updateChargeCardRequestSchema,
} from '../models/updateChargeCardRequest';
import {
  UpdateChargeDueDateRequest,
  updateChargeDueDateRequestSchema,
} from '../models/updateChargeDueDateRequest';
import {
  UpdateChargePaymentMethodRequest,
  updateChargePaymentMethodRequestSchema,
} from '../models/updateChargePaymentMethodRequest';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class ChargesController extends BaseController {
  /**
   * Updates the metadata from a charge
   *
   * @param chargeId        The charge id
   * @param request         Request for updating the charge metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateChargeMetadata(
    chargeId: string,
    request: UpdateMetadataRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, updateMetadataRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/Charges/${mapped.chargeId}/metadata`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * Updates a charge's payment method
   *
   * @param chargeId        Charge id
   * @param request         Request for updating the payment method from a
   *                                                                   charge
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateChargePaymentMethod(
    chargeId: string,
    request: UpdateChargePaymentMethodRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, updateChargePaymentMethodRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/charges/${mapped.chargeId}/payment-method`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * @param chargeId  Charge Id
   * @param page      Page number
   * @param size      Page size
   * @return Response from the API call
   */
  async getChargeTransactions(
    chargeId: string,
    page?: number,
    size?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListChargeTransactionsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      page: [page, optional(number())],
      size: [size, optional(number())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.appendTemplatePath`/charges/${mapped.chargeId}/transactions`;
    return req.callAsJson(listChargeTransactionsResponseSchema, requestOptions);
  }

  /**
   * Updates the due date from a charge
   *
   * @param chargeId        Charge Id
   * @param request         Request for updating the due date
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateChargeDueDate(
    chargeId: string,
    request: UpdateChargeDueDateRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, updateChargeDueDateRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/Charges/${mapped.chargeId}/due-date`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * Lists all charges
   *
   * @param page           Page number
   * @param size           Page size
   * @param code           Filter for charge's code
   * @param status         Filter for charge's status
   * @param paymentMethod  Filter for charge's payment method
   * @param customerId     Filter for charge's customer id
   * @param orderId        Filter for charge's order id
   * @param createdSince   Filter for the beginning of the range for charge's creation
   * @param createdUntil   Filter for the end of the range for charge's creation
   * @return Response from the API call
   */
  async getCharges(
    page?: number,
    size?: number,
    code?: string,
    status?: string,
    paymentMethod?: string,
    customerId?: string,
    orderId?: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListChargesResponse>> {
    const req = this.createRequest('GET', '/charges');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      size: [size, optional(number())],
      code: [code, optional(string())],
      status: [status, optional(string())],
      paymentMethod: [paymentMethod, optional(string())],
      customerId: [customerId, optional(string())],
      orderId: [orderId, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('code', mapped.code);
    req.query('status', mapped.status);
    req.query('payment_method', mapped.paymentMethod);
    req.query('customer_id', mapped.customerId);
    req.query('order_id', mapped.orderId);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    return req.callAsJson(listChargesResponseSchema, requestOptions);
  }

  /**
   * Captures a charge
   *
   * @param chargeId        Charge id
   * @param request         Request for capturing a charge
   * @param idempotencyKey
   * @return Response from the API call
   */
  async captureCharge(
    chargeId: string,
    request?: CreateCaptureChargeRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, optional(createCaptureChargeRequestSchema)],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/charges/${mapped.chargeId}/capture`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * Updates the card from a charge
   *
   * @param chargeId        Charge id
   * @param request         Request for updating a charge's card
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateChargeCard(
    chargeId: string,
    request: UpdateChargeCardRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, updateChargeCardRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/charges/${mapped.chargeId}/card`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * Get a charge from its id
   *
   * @param chargeId  Charge id
   * @return Response from the API call
   */
  async getCharge(
    chargeId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ chargeId: [chargeId, string()] });
    req.appendTemplatePath`/charges/${mapped.chargeId}`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * @param status
   * @param createdSince
   * @param createdUntil
   * @return Response from the API call
   */
  async getChargesSummary(
    status: string,
    createdSince?: string,
    createdUntil?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargesSummaryResponse>> {
    const req = this.createRequest('GET', '/charges/summary');
    const mapped = req.prepareArgs({
      status: [status, string()],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
    });
    req.query('status', mapped.status);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    return req.callAsJson(getChargesSummaryResponseSchema, requestOptions);
  }

  /**
   * Retries a charge
   *
   * @param chargeId        Charge id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async retryCharge(
    chargeId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/charges/${mapped.chargeId}/retry`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * Cancel a charge
   *
   * @param chargeId        Charge id
   * @param request         Request for cancelling a charge
   * @param idempotencyKey
   * @return Response from the API call
   */
  async cancelCharge(
    chargeId: string,
    request?: CreateCancelChargeRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, optional(createCancelChargeRequestSchema)],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/charges/${mapped.chargeId}`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * Creates a new charge
   *
   * @param request         Request for creating a charge
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createCharge(
    request: CreateChargeRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('POST', '/Charges');
    const mapped = req.prepareArgs({
      request: [request, createChargeRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }

  /**
   * @param chargeId
   * @param request         Request for confirm payment
   * @param idempotencyKey
   * @return Response from the API call
   */
  async confirmPayment(
    chargeId: string,
    request?: CreateConfirmPaymentRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetChargeResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      chargeId: [chargeId, string()],
      request: [request, optional(createConfirmPaymentRequestSchema)],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/charges/${mapped.chargeId}/confirm-payment`;
    return req.callAsJson(getChargeResponseSchema, requestOptions);
  }
}
