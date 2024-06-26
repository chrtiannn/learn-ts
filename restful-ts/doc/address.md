# Adress API Spec

## Create Address

Endpoint : POST api/contacts/:idContact/addresses

Request Header :

- X-API TOKEN : token

Request Body :

```json
{
  "street": "Jalan Contoh",
  "city": "Kota Contoh",
  "province": "Provinsi Contoh",
  "country": "Negara Contoh",
  "postal_code": "12345"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota Contoh",
    "province": "Provinsi Contoh",
    "country": "Negara Contoh",
    "postal_code": "12345"
  }
}
```

Response Body (Failed) :

```json
{
  "errros": "street is required"
}
```

## Get Address

Endpoint : GET api/contacts/:idContact/adresses/:idAddress

Request Header :

- X-API TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota Contoh",
    "province": "Provinsi Contoh",
    "country": "Negara Contoh",
    "postal_code": "12345"
  }
}
```

Response Body (Failed) :

```json
{
  "errros": "Address is not found"
}
```

## Update Address

Endpoint : PUT api/contacts/:idContact/idAddress

Request Header :

- X-API TOKEN : token

Request Body :

```json
{
  "street": "Jalan Contoh",
  "city": "Kota Contoh",
  "province": "Provinsi Contoh",
  "country": "Negara Contoh",
  "postal_code": "12345"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota Contoh",
    "province": "Provinsi Contoh",
    "country": "Negara Contoh",
    "postal_code": "12345"
  }
}
```

Response Body (Failed) :

```json
{
  "errros": "street is required"
}
```

## Remove Address

Endpoint : DELETE api/contacts/:idContact/adresses

Request Header :

- X-API TOKEN : token

Response Body (Success) :

```json
{
  "data": "Ok"
}
```

Response Body (Failed) :

```json
{
  "errros": "Address is not found"
}
```

## List Address

Endpoint : GET api/contacts/:idContact/adresses

Request Header :

- X-API TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "street": "Jalan Contoh",
    "city": "Kota Contoh",
    "province": "Provinsi Contoh",
    "country": "Negara Contoh",
    "postal_code": "12345"
  },
  {
    "id": 2,
    "street": "Jalan Dua",
    "city": "Kota Dua",
    "province": "Provinsi Dua",
    "country": "Negara Dua",
    "postal_code": "22345"
  }
}
```

Response Body (Failed) :

```json
{
  "errros": "Contact is not found"
}
```
