# Charges

```ts
const chargesController = new ChargesController(client);
```

## Class Name

`ChargesController`

## Methods

* [Update Charge Metadata](../../doc/controllers/charges.md#update-charge-metadata)
* [Update Charge Payment Method](../../doc/controllers/charges.md#update-charge-payment-method)
* [Get Charge Transactions](../../doc/controllers/charges.md#get-charge-transactions)
* [Update Charge Due Date](../../doc/controllers/charges.md#update-charge-due-date)
* [Get Charges](../../doc/controllers/charges.md#get-charges)
* [Capture Charge](../../doc/controllers/charges.md#capture-charge)
* [Update Charge Card](../../doc/controllers/charges.md#update-charge-card)
* [Get Charge](../../doc/controllers/charges.md#get-charge)
* [Get Charges Summary](../../doc/controllers/charges.md#get-charges-summary)
* [Retry Charge](../../doc/controllers/charges.md#retry-charge)
* [Cancel Charge](../../doc/controllers/charges.md#cancel-charge)
* [Create Charge](../../doc/controllers/charges.md#create-charge)
* [Confirm Payment](../../doc/controllers/charges.md#confirm-payment)


# Update Charge Metadata

Updates the metadata from a charge

```ts
async updateChargeMetadata(
  chargeId: string,
  request: UpdateMetadataRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | The charge id |
| `request` | [`UpdateMetadataRequest`](../../doc/models/update-metadata-request.md) | Body, Required | Request for updating the charge metadata |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const request: UpdateMetadataRequest = {
  metadata: requestMetadata,
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargeMetadata(chargeId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Charge Payment Method

Updates a charge's payment method

```ts
async updateChargePaymentMethod(
  chargeId: string,
  request: UpdateChargePaymentMethodRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`UpdateChargePaymentMethodRequest`](../../doc/models/update-charge-payment-method-request.md) | Body, Required | Request for updating the payment method from a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
const requestCreditCard: CreateCreditCardPaymentRequest = {};

const requestDebitCard: CreateDebitCardPaymentRequest = {};

const requestBoletoBillingAddressMetadata: Record<string, string> = {'key0' : 'metadata5' } const requestBoletoBillingAddress: CreateAddressRequest = {
  street: 'street8',
  number: 'number4',
  zipCode: 'zip_code2',
  neighborhood: 'neighborhood4',
  city: 'city2',
  state: 'state6',
  country: 'country2',
  complement: 'complement6',
  metadata: requestBoletoBillingAddressMetadata,
  line1: 'line_18',
  line2: 'line_26',
};

const requestBoleto: CreateBoletoPaymentRequest = {
  retries: 10,
  bank: 'bank4',
  instructions: 'instructions4',
  billingAddress: requestBoletoBillingAddress,
  documentNumber: 'document_number0',
  statementDescriptor: 'statement_descriptor6',
};

const requestVoucher: CreateVoucherPaymentRequest = {};

const requestCash: CreateCashPaymentRequest = {
  description: 'description6',
  confirm: false,
};

const requestBankTransfer: CreateBankTransferPaymentRequest = {
  bank: 'bank4',
  retries: 204,
};

const requestPrivateLabel: CreatePrivateLabelPaymentRequest = {};

const request: UpdateChargePaymentMethodRequest = {
  updateSubscription: false,
  paymentMethod: 'payment_method4',
  creditCard: requestCreditCard,
  debitCard: requestDebitCard,
  boleto: requestBoleto,
  voucher: requestVoucher,
  cash: requestCash,
  bankTransfer: requestBankTransfer,
  privateLabel: requestPrivateLabel,
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargePaymentMethod(chargeId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charge Transactions

```ts
async getChargeTransactions(
  chargeId: string,
  page?: number,
  size?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ListChargeTransactionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge Id |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListChargeTransactionsResponse`](../../doc/models/list-charge-transactions-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
try {
  const { result, ...httpResponse } = await chargesController.getChargeTransactions(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Charge Due Date

Updates the due date from a charge

```ts
async updateChargeDueDate(
  chargeId: string,
  request: UpdateChargeDueDateRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge Id |
| `request` | [`UpdateChargeDueDateRequest`](../../doc/models/update-charge-due-date-request.md) | Body, Required | Request for updating the due date |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
const request: UpdateChargeDueDateRequest = {};

try {
  const { result, ...httpResponse } = await chargesController.updateChargeDueDate(chargeId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charges

Lists all charges

```ts
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
): Promise<ApiResponse<ListChargesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number |
| `size` | `number \| undefined` | Query, Optional | Page size |
| `code` | `string \| undefined` | Query, Optional | Filter for charge's code |
| `status` | `string \| undefined` | Query, Optional | Filter for charge's status |
| `paymentMethod` | `string \| undefined` | Query, Optional | Filter for charge's payment method |
| `customerId` | `string \| undefined` | Query, Optional | Filter for charge's customer id |
| `orderId` | `string \| undefined` | Query, Optional | Filter for charge's order id |
| `createdSince` | `string \| undefined` | Query, Optional | Filter for the beginning of the range for charge's creation |
| `createdUntil` | `string \| undefined` | Query, Optional | Filter for the end of the range for charge's creation |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ListChargesResponse`](../../doc/models/list-charges-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await chargesController.getCharges();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Capture Charge

Captures a charge

```ts
async captureCharge(
  chargeId: string,
  request?: CreateCaptureChargeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`CreateCaptureChargeRequest \| undefined`](../../doc/models/create-capture-charge-request.md) | Body, Optional | Request for capturing a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
try {
  const { result, ...httpResponse } = await chargesController.captureCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Charge Card

Updates the card from a charge

```ts
async updateChargeCard(
  chargeId: string,
  request: UpdateChargeCardRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`UpdateChargeCardRequest`](../../doc/models/update-charge-card-request.md) | Body, Required | Request for updating a charge's card |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
const requestCard: CreateCardRequest = {};

const request: UpdateChargeCardRequest = {
  updateSubscription: false,
  cardId: 'card_id2',
  card: requestCard,
  recurrence: false,
};

try {
  const { result, ...httpResponse } = await chargesController.updateChargeCard(chargeId, request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charge

Get a charge from its id

```ts
async getCharge(
  chargeId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
try {
  const { result, ...httpResponse } = await chargesController.getCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Charges Summary

```ts
async getChargesSummary(
  status: string,
  createdSince?: string,
  createdUntil?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargesSummaryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Query, Required | - |
| `createdSince` | `string \| undefined` | Query, Optional | - |
| `createdUntil` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargesSummaryResponse`](../../doc/models/get-charges-summary-response.md)

## Example Usage

```ts
const status = 'status8';
try {
  const { result, ...httpResponse } = await chargesController.getChargesSummary(status);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Retry Charge

Retries a charge

```ts
async retryCharge(
  chargeId: string,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
try {
  const { result, ...httpResponse } = await chargesController.retryCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Cancel Charge

Cancel a charge

```ts
async cancelCharge(
  chargeId: string,
  request?: CreateCancelChargeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | Charge id |
| `request` | [`CreateCancelChargeRequest \| undefined`](../../doc/models/create-cancel-charge-request.md) | Body, Optional | Request for cancelling a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
try {
  const { result, ...httpResponse } = await chargesController.cancelCharge(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Charge

Creates a new charge

```ts
async createCharge(
  request: CreateChargeRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `request` | [`CreateChargeRequest`](../../doc/models/create-charge-request.md) | Body, Required | Request for creating a charge |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const requestCustomerAddressMetadata: Record<string, string> = {'key0' : 'metadata7', 'key1' : 'metadata6' } const requestCustomerAddress: CreateAddressRequest = {
  street: 'street2',
  number: 'number0',
  zipCode: 'zip_code6',
  neighborhood: 'neighborhood8',
  city: 'city2',
  state: 'state8',
  country: 'country6',
  complement: 'complement8',
  metadata: requestCustomerAddressMetadata,
  line1: 'line_16',
  line2: 'line_20',
};

const requestCustomerMetadata: Record<string, string> = {'key0' : 'metadata3', 'key1' : 'metadata2', 'key2' : 'metadata1' } const requestCustomerPhones: CreatePhonesRequest = {};

const requestCustomer: CreateCustomerRequest = {
  name: '{\n    "name": "Tony Stark"\n}',
  email: 'email0',
  document: 'document0',
  type: 'type4',
  address: requestCustomerAddress,
  metadata: requestCustomerMetadata,
  phones: requestCustomerPhones,
  code: 'code4',
};

const requestPayment: CreatePaymentRequest = {
  paymentMethod: 'payment_method2',
};

const requestMetadata: Record<string, string> = {'key0' : 'metadata3' } const requestAntifraudClearsale: CreateClearSaleRequest = {
  customSla: 52,
};

const requestAntifraud: CreateAntifraudRequest = {
  type: 'type0',
  clearsale: requestAntifraudClearsale,
};

const request: CreateChargeRequest = {
  code: 'code4',
  amount: 242,
  customerId: 'customer_id4',
  customer: requestCustomer,
  payment: requestPayment,
  metadata: requestMetadata,
  antifraud: requestAntifraud,
  orderId: 'order_id0',
};

try {
  const { result, ...httpResponse } = await chargesController.createCharge(request);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Confirm Payment

```ts
async confirmPayment(
  chargeId: string,
  request?: CreateConfirmPaymentRequest,
  idempotencyKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetChargeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `chargeId` | `string` | Template, Required | - |
| `request` | [`CreateConfirmPaymentRequest \| undefined`](../../doc/models/create-confirm-payment-request.md) | Body, Optional | Request for confirm payment |
| `idempotencyKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`GetChargeResponse`](../../doc/models/get-charge-response.md)

## Example Usage

```ts
const chargeId = 'charge_id8';
try {
  const { result, ...httpResponse } = await chargesController.confirmPayment(chargeId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

