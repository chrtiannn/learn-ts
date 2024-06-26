# Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Headers :

- X-API TOKEN : token

Request Body :

```json
{
  "first_name": "Christian",
  "last_name": "Morgan",
  "email": "christian@mail.com",
  "phone": "08123456789"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Christian",
    "last_name": "Morgan",
    "email": "christian@mail.com",
    "phone": "08123456789"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "first_name is required, ..."
}
```

## Get Contact

Endpoint : GET /api/contact/:id

Request Headers :

- X-API TOKEN : token

Request Body :

```json
{
  "first_name": "Christian",
  "last_name": "Morgan",
  "email": "christian@mail.com",
  "phone": "08123456789"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Christian",
    "last_name": "Morgan",
    "email": "christian@mail.com",
    "phone": "08123456789"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username not found, ..."
}
```

## Update Contact

Endpoint : PUT /api/contact/:id

Request Headers :

- X-API TOKEN : token

Request Body :

```json
{
  "first_name": "Christian",
  "last_name": "Morgan",
  "email": "christian@mail.com",
  "phone": "08123456789"
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "first_name": "Christian",
    "last_name": "Morgan",
    "email": "christian@mail.com",
    "phone": "08123456789"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username is required, ..."
}
```

## Remove Contact

Endpoint : DELETE /api/contact/:id

Request Headers :

- X-API TOKEN : token

Request Body :

```json
{
  "first_name": "Christian",
  "last_name": "Morgan",
  "email": "christian@mail.com",
  "phone": "08123456789"
}
```

Response Body (Success) :

```json
{
  "data": "Ok"
}
```

Response Body (Failed) :

```json
{
  "errors": "contact is not found"
}
```

## Search Contact

Endpoint : GET /api/contact/:id

Query Parameter :

- name : string, contact first name or last name, optional
- phone : string, contact phone, optional
- email : string, contact email, optional
- page : number, default 1
- size: number, default 10

Request Headers :

- X-API TOKEN : token

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "Christian",
      "last_name": "Morgan",
      "email": "christian@mail.com",
      "phone": "08123456789"
    },
    {
      "id": "2",
      "first_name": "Jeanne",
      "last_name": "Arc",
      "email": "jeanne@mail.com",
      "phone": "08987654321"
    },
    ...
  ],
  "paging" : [
    {
        "current_page" : 1,
        "total_page" : 10,
        "size" : 10

    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```
