
# Create Boleto Payment Request

Contains the settings for creating a boleto payment

## Structure

`CreateBoletoPaymentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `retries` | `number` | Required | Number of retries |
| `bank` | `string` | Required | The bank code, containing three characters. The available codes are on the API specification |
| `instructions` | `string` | Required | The instructions field that will be printed on the boleto. |
| `dueAt` | `string \| undefined` | Optional | Boleto due date |
| `billingAddress` | [`CreateAddressRequest`](../../doc/models/create-address-request.md) | Required | Card's billing address |
| `billingAddressId` | `string \| undefined` | Optional | The address id for the billing address |
| `nossoNumero` | `string \| undefined` | Optional | Customer identification number with the bank |
| `documentNumber` | `string` | Required | Boleto identification |
| `statementDescriptor` | `string` | Required | Soft Descriptor |
| `interest` | [`CreateInterestRequest \| undefined`](../../doc/models/create-interest-request.md) | Optional | - |
| `fine` | [`CreateFineRequest \| undefined`](../../doc/models/create-fine-request.md) | Optional | - |
| `maxDaysToPayPastDue` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "retries": 230,
  "bank": "bank8",
  "instructions": "instructions2",
  "due_at": null,
  "billing_address": {
    "street": "street8",
    "number": "number4",
    "zip_code": "zip_code2",
    "neighborhood": "neighborhood4",
    "city": "city2",
    "state": "state6",
    "country": "country2",
    "complement": "complement6",
    "metadata": {
      "key0": "metadata5",
      "key1": "metadata6"
    },
    "line_1": "line_18",
    "line_2": "line_26"
  },
  "billing_address_id": null,
  "nosso_numero": null,
  "document_number": "document_number6",
  "statement_descriptor": "statement_descriptor0",
  "interest": null,
  "fine": null,
  "max_days_to_pay_past_due": null
}
```

