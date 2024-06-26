# User API spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "christian",
  "password": "secretpass",
  "name": "Christian Morgan"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "christian",
    "name": "Christian Morgan",
    "token": "uuid"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username or password is wrong"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "christian",
  "password": "secretpass"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "christian",
    "name": "Christian Morgan"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "username and password "
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API TOKEN : token

Response Body (Success) :

```json
{
  "data": {
    "username": "christian",
    "name": "Christian Morgan"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API TOKEN : token

Request Body :

```json
{
  "password": "secretpass",
  "name": "Christian Morgan"
}
```

Response Body (Success) :

```json
{
  "data": {
    "username": "christian",
    "name": "Christian Morgan"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User

Endpoint : DELETE /api/users/current

Request Header :

- X-API TOKEN : token

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Unauthorized"
}
```
