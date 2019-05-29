# Sweet Corner API

## API Base URL
```
http://api.sc.lfzprototypes.com
```

## Product Endpoints

### Get all products
- **Method:** `GET`
- **Path:** `/api/products`
- **Data:** `none`
- **Query:** `none`
- **Headers:** `none`
- **Additional Info:** `none`
- **Response:**
```JAVASCRIPT
{
    "products": [
        {
            "id": "65481bd6-f571-45fb-9d21-2ffd0662f3d8",
            "caption": "Delicious Strawberry Cupcake",
            "cost": 350,
            "name": "Strawberry Delight",
            "thumbnail": {
                "id": "db7e2412-8f4e-486b-af4a-b8f09c5711c0",
                "altText": "Strawberry cupcake",
                "file": "cupcake_sq_1.jpg",
                "type": "thumbnails",
                "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_1.jpg"
            }
        },
        {
            "id": "6f33d1ac-3750-4888-94b5-d4c5b520fc32",
            "caption": "Sweet Berry Cupcake",
            "cost": 200,
            "name": "Purple Dream",
            "thumbnail": {
                "id": "72b569d8-7c47-475b-8a03-5bb5b8d808b8",
                "altText": "Berry cupcake",
                "file": "cupcake_sq_2.jpg",
                "type": "thumbnails",
                "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_2.jpg"
            }
        }
    ]
}
```

### Get a single product's details
- **Method:** `GET`
- **Path:** `/api/products/:product_id`
- **Data:** `none`
- **Query:** `none`
- **Headers:** `none`
- **Additional Info:** `none`
- **Response:**
```JAVASCRIPT
{
    "id": "65481bd6-f571-45fb-9d21-2ffd0662f3d8",
    "caption": "Delicious Strawberry Cupcake",
    "cost": 350,
    "description": "These strawberry delights will satisfy both your sweet tooth and those strawberry cravings.",
    "name": "Strawberry Delight",
    "image": {
        "id": "6a2d268d-b2ed-40a3-87bb-2f06a58a67b2",
        "altText": "Strawberry cupcake",
        "file": "cupcake_sq_1.jpg",
        "type": "full_images",
        "url": "http://api.sc.lfzprototypes.com/images/full_images/cupcake_sq_1.jpg"
    },
    "thumbnail": {
        "id": "db7e2412-8f4e-486b-af4a-b8f09c5711c0",
        "altText": "Strawberry cupcake",
        "file": "cupcake_sq_1.jpg",
        "type": "thumbnails",
        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_1.jpg"
    }
}
```

## Shopping Cart Endpoints

## User (Auth) Endpoints

### Create new User account
- **Method:** `POST`
- **Path:** `/auth/create-account`
- **Data:**
    ```JAVASCRIPT
    {
        email: 'example@email.com', // Must be a valid email address
        firstName: 'Jane',
        lastName: 'Doe',
        password: 'Qwerty1!' // Must have an uppercase letter, lowercase letter, number, special character, and be at least 8 characters long
    }
    ```
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "X-Cart-Token": "cart token goes here" // Optional, see "additional info" below
    }
    ```
- **Additional Info:**
    > If the user creates a cart before creating an account, send the cart token in the headers with the create account request and the cart will be transferred to the newly created account.
- **Response:**
    ```JAVASCRIPT
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjMsInRzIjoxNTU5MTU5ODk0MDUzfQ.SZNcSeB8ZMABdLUX94dVl6XyomjOj-pgelSWTeQXLQI",
        "user": {
            "name": "Jane Doe",
            "email": "example@email.com",
            "pid": "1c2158a8-c5fb-4a61-8e10-cdc02a48635b"
        }
    }
    ```

### User sign in
- **Method:** `POST`
- **Path:** `/api/sign-in`
- **Data:**
    ```JAVASCRIPT
    {
        email: 'example@email.com',
        password: 'Qwerty1!'
    }
    ```
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "X-Cart-Token": "cart token goes here" // Optional, see "additional info" below
    }
    ```
- **Additional Info:**
    > If the user creates a cart before signing in, send the cart token in the headers with the create account request and the cart will be transferred to the user's account.
- **Response:**
    ```JAVASCRIPT
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjMsInRzIjoxNTU5MTYwNDUyNjgwfQ.c04btYz8m4fNa4UGkSwGHxd-mnrXNzCbMfpYFHWHB8U",
        "user": {
            "name": "Jane Doe",
            "email": "example@email.com",
            "pid": "1c2158a8-c5fb-4a61-8e10-cdc02a48635b"
        }
    }
    ```

### User JWT sign in
- **Method:** `GET`
- **Path:** `/api/sign-in`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "User auth token" // Required, see "additional info" below
    }
    ```
- **Additional Info:**
    - This endpoint is used for persistent login or to quickly verify auth from the server. When the user creates an account or signs in they will be given an auth token, the token should be stored in local storage then sent along with any requests that allow/require the "Authorization" header.
    - **NOTE:** Auth tokens expire after approx 2 weeks
- **Response:**
    ```JAVASCRIPT
    {
        "user": {
            "name": "Jane Doe",
            "email": "example@email.com",
            "pid": "1c2158a8-c5fb-4a61-8e10-cdc02a48635b"
        }
    }
    ```
