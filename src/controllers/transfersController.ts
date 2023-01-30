/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { CreateTransfer, createTransferSchema } from '../models/createTransfer';
import { GetTransfer, getTransferSchema } from '../models/getTransfer';
import { ListTransfers, listTransfersSchema } from '../models/listTransfers';
import { string } from '../schema';
import { BaseController } from './baseController';

export class TransfersController extends BaseController {
  /**
   * Gets all transfers
   *
   * @return Response from the API call
   */
  async getTransfers(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ListTransfers>> {
    const req = this.createRequest('GET', '/transfers');
    return req.callAsJson(listTransfersSchema, requestOptions);
  }

  /**
   * @param transferId
   * @return Response from the API call
   */
  async getTransferById(
    transferId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransfer>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ transferId: [transferId, string()] });
    req.appendTemplatePath`/transfers/${mapped.transferId}`;
    return req.callAsJson(getTransferSchema, requestOptions);
  }

  /**
   * @param request
   * @return Response from the API call
   */
  async createTransfer(
    request: CreateTransfer,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<GetTransfer>> {
    const req = this.createRequest('POST', '/transfers/recipients');
    const mapped = req.prepareArgs({
      request: [request, createTransferSchema],
    });
    req.json(mapped.request);
    return req.callAsJson(getTransferSchema, requestOptions);
  }
}