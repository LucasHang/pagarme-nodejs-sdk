/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CreateOrderItemRequest,
  createOrderItemRequestSchema,
} from '../models/createOrderItemRequest';
import {
  CreateOrderRequest,
  createOrderRequestSchema,
} from '../models/createOrderRequest';
import {
  GetOrderItemResponse,
  getOrderItemResponseSchema,
} from '../models/getOrderItemResponse';
import {
  GetOrderResponse,
  getOrderResponseSchema,
} from '../models/getOrderResponse';
import {
  ListOrderResponse,
  listOrderResponseSchema,
} from '../models/listOrderResponse';
import {
  UpdateMetadataRequest,
  updateMetadataRequestSchema,
} from '../models/updateMetadataRequest';
import {
  UpdateOrderItemRequest,
  updateOrderItemRequestSchema,
} from '../models/updateOrderItemRequest';
import {
  UpdateOrderStatusRequest,
  updateOrderStatusRequestSchema,
} from '../models/updateOrderStatusRequest';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class OrdersController extends BaseController {
  /**
   * Gets all orders
   *
   * @param page          Page number
   * @param size          Page size
   * @param code          Filter for order's code
   * @param status        Filter for order's status
   * @param createdSince  Filter for order's creation date start range
   * @param createdUntil  Filter for order's creation date end range
   * @param customerId    Filter for order's customer id
   * @return Response from the API call
   */
  async getOrders(
    page?: number,
    size?: number,
    code?: string,
    status?: string,
    createdSince?: string,
    createdUntil?: string,
    customerId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListOrderResponse>> {
    const req = this.createRequest('GET', '/orders');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      size: [size, optional(number())],
      code: [code, optional(string())],
      status: [status, optional(string())],
      createdSince: [createdSince, optional(string())],
      createdUntil: [createdUntil, optional(string())],
      customerId: [customerId, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('size', mapped.size);
    req.query('code', mapped.code);
    req.query('status', mapped.status);
    req.query('created_since', mapped.createdSince);
    req.query('created_until', mapped.createdUntil);
    req.query('customer_id', mapped.customerId);
    return req.callAsJson(listOrderResponseSchema, requestOptions);
  }

  /**
   * @param orderId         Order Id
   * @param itemId          Item Id
   * @param request         Item Model
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateOrderItem(
    orderId: string,
    itemId: string,
    request: UpdateOrderItemRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderItemResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      itemId: [itemId, string()],
      request: [request, updateOrderItemRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/orders/${mapped.orderId}/items/${mapped.itemId}`;
    return req.callAsJson(getOrderItemResponseSchema, requestOptions);
  }

  /**
   * @param orderId         Order Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteAllOrderItems(
    orderId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/orders/${mapped.orderId}/items`;
    return req.callAsJson(getOrderResponseSchema, requestOptions);
  }

  /**
   * @param orderId         Order Id
   * @param itemId          Item Id
   * @param idempotencyKey
   * @return Response from the API call
   */
  async deleteOrderItem(
    orderId: string,
    itemId: string,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderItemResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      itemId: [itemId, string()],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.appendTemplatePath`/orders/${mapped.orderId}/items/${mapped.itemId}`;
    return req.callAsJson(getOrderItemResponseSchema, requestOptions);
  }

  /**
   * @param id              Order Id
   * @param request         Update Order Model
   * @param idempotencyKey
   * @return Response from the API call
   */
  async closeOrder(
    id: string,
    request: UpdateOrderStatusRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      id: [id, string()],
      request: [request, updateOrderStatusRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/orders/${mapped.id}/closed`;
    return req.callAsJson(getOrderResponseSchema, requestOptions);
  }

  /**
   * Creates a new Order
   *
   * @param body            Request for creating an order
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createOrder(
    body: CreateOrderRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderResponse>> {
    const req = this.createRequest('POST', '/orders');
    const mapped = req.prepareArgs({
      body: [body, createOrderRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.body);
    return req.callAsJson(getOrderResponseSchema, requestOptions);
  }

  /**
   * @param orderId         Order Id
   * @param request         Order Item Model
   * @param idempotencyKey
   * @return Response from the API call
   */
  async createOrderItem(
    orderId: string,
    request: CreateOrderItemRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderItemResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      request: [request, createOrderItemRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/orders/${mapped.orderId}/items`;
    return req.callAsJson(getOrderItemResponseSchema, requestOptions);
  }

  /**
   * @param orderId Order Id
   * @param itemId  Item Id
   * @return Response from the API call
   */
  async getOrderItem(
    orderId: string,
    itemId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderItemResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      itemId: [itemId, string()],
    });
    req.appendTemplatePath`/orders/${mapped.orderId}/items/${mapped.itemId}`;
    return req.callAsJson(getOrderItemResponseSchema, requestOptions);
  }

  /**
   * Updates the metadata from an order
   *
   * @param orderId         The order id
   * @param request         Request for updating the order metadata
   * @param idempotencyKey
   * @return Response from the API call
   */
  async updateOrderMetadata(
    orderId: string,
    request: UpdateMetadataRequest,
    idempotencyKey?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderResponse>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      orderId: [orderId, string()],
      request: [request, updateMetadataRequestSchema],
      idempotencyKey: [idempotencyKey, optional(string())],
    });
    req.header('idempotency-key', mapped.idempotencyKey);
    req.json(mapped.request);
    req.appendTemplatePath`/Orders/${mapped.orderId}/metadata`;
    return req.callAsJson(getOrderResponseSchema, requestOptions);
  }

  /**
   * Gets an order
   *
   * @param orderId  Order id
   * @return Response from the API call
   */
  async getOrder(
    orderId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetOrderResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ orderId: [orderId, string()] });
    req.appendTemplatePath`/orders/${mapped.orderId}`;
    return req.callAsJson(getOrderResponseSchema, requestOptions);
  }
}
