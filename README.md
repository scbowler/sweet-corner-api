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

### Get all products FULL
- **Method:** `GET`
- **Path:** `/api/products/full`
- **Data:** `none`
- **Query:** `none`
- **Headers:** `none`
- **Additional Info:** `none`
- **Response:**
    ```JAVASCRIPT
    {
        "products": [
            {
                "id": "825e97f3-f2f6-4c21-9a05-94865f346b8b",
                "calories": 300,
                "caption": "Delicious Strawberry Cupcake",
                "cost": 350,
                "name": "Strawberry Delight",
                "thumbnail": {
                    "id": "a868e043-5c8e-481f-b3db-0f465b479227",
                    "altText": "Strawberry cupcake",
                    "file": "cupcake_sq_1.jpg",
                    "type": "thumbnails",
                    "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_1.jpg"
                },
                "allergy": {
                    "dairy": true,
                    "gluten": true,
                    "nuts": false
                },
                "nutrition": {
                    "carbs": 200,
                    "fat": 100,
                    "sugar": 130
                }
            },
            {
                "id": "4d8f1fd1-1801-41a7-99ce-4b5865c4e143",
                "calories": 350,
                "caption": "Sweet Berry Cupcake",
                "cost": 200,
                "name": "Purple Dream",
                "thumbnail": {
                    "id": "eaee149b-c2f0-452f-8ed0-ba0c9bb6e88d",
                    "altText": "Berry cupcake",
                    "file": "cupcake_sq_2.jpg",
                    "type": "thumbnails",
                    "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_2.jpg"
                },
                "allergy": {
                    "dairy": false,
                    "gluten": true,
                    "nuts": true
                },
                "nutrition": {
                    "carbs": 220,
                    "fat": 200,
                    "sugar": 150
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
    "id": "6686e24c-db9b-48b9-8d80-65ac4e6d94d3",
    "calories": 300,
    "caption": "Delicious Strawberry Cupcake",
    "cost": 350,
    "description": "These strawberry delights will satisfy both your sweet tooth and those strawberry cravings.",
    "name": "Strawberry Delight",
    "image": {
        "id": "1edda9cc-fea0-4b00-b9eb-34a84572ed67",
        "altText": "Strawberry cupcake",
        "file": "cupcake_sq_1.jpg",
        "type": "full_images",
        "url": "http://api.sc.lfzprototypes.com/images/full_images/cupcake_sq_1.jpg"
    },
    "thumbnail": {
        "id": "1e69c592-8bf5-4da3-9aa3-993936898d20",
        "altText": "Strawberry cupcake",
        "file": "cupcake_sq_1.jpg",
        "type": "thumbnails",
        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_1.jpg"
    },
    "allergy": {
        "dairy": true,
        "gluten": true,
        "nuts": false
    },
    "nutrition": {
        "carbs": 200,
        "fat": 100,
        "sugar": 130
    }
}
```

## Shopping Cart Endpoints

### Add item to cart
- **Method:** `POST`
- **Path:** `/api/cart/items/:product_id`
- **Data:**
    ```JAVASCRIPT
    {
        quantity: 2 // Optional, will default to 1 if no quantity given
    }
    ```
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - If the "Authorization" header is sent, the item will be added to the users currently active cart. If the user does not have an active cart, a new cart will be created and become the active cart.
    - If the "X-Cart-Token" header is sent, the item will be added to the cart that belongs to that token.
    - If no headers are sent a new cart will be created and the cart token will be sent in the response. All subsequent requests should use the provided cart token if not logged in, this will ensure that all user items will be added to the same cart. 
    - If the item already exists in the currently active cart, the quantity of that item will be adjusted based on the quantity sent. Quantity defaults to 1 if not sent.
    - If both the auth and cart headers are sent, the auth header will take precedence. Once the user signs in or registers, the cart will be transferred to the user so the cart token is no longer needed and becomes invalid.
- **Response:**
    ```JAVASCRIPT
    {
        "cartId": "eb219d35-9a1f-492f-8b83-eab8660f3d74",
        "cartToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYXJ0SWQiOjE0LCJjcmVhdGVkIjoxNTU5MTc3MTU4NzU3fQ.ZdlAU9exSx-JgwiBqCu3TGt9fintMmNBvKOS9ou9u9w",
        "item": {
            "added": "2019-05-30T00:45:58.000Z",
            "each": 200,
            "itemId": "2edb2c46-2053-4c9b-8e3b-277bd2fba7e6",
            "name": "Purple Dream",
            "productId": "4d8f1fd1-1801-41a7-99ce-4b5865c4e143",
            "quantity": 2,
            "thumbnail": {
                "altText": "Berry cupcake",
                "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_2.jpg"
            },
            "total": 400
        },
        "message": "2 Purple Dream cupcakes added to cart",
        "total": {
            "cost": 400,
            "items": 2
        }
    }
    ```

### Get shopping cart
- **Method:** `GET`
- **Path:** `/api/cart`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - You must send either the "Authorization" or "X-Cart-Token" header.
    - If the "Authorization" header is sent, you will get the user's currently active cart.
    - If the "X-Cart-Token" header is sent, you will get the cart that is associated with that token.
    - If no cart is found from the provided token, auth or cart, or if no header is provided you will get the response noted below under **"No Cart Response"**
- **Response:**
    ```JAVASCRIPT
    {
        "cartId": "eb219d35-9a1f-492f-8b83-eab8660f3d74",
        "items": [
            {
                "added": "2019-05-30T00:45:58.000Z",
                "each": 200,
                "itemId": "2edb2c46-2053-4c9b-8e3b-277bd2fba7e6",
                "name": "Purple Dream",
                "productId": "6f33d1ac-3750-4888-94b5-d4c5b520fc32",
                "quantity": 2,
                "thumbnail": {
                    "altText": "Berry cupcake",
                    "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_2.jpg"
                },
                "total": 400
            }
        ],
        "total": {
            "cost": 400,
            "items": 2
        }
    }
    ```
- **No Cart Response**
    ```JAVASCRIPT
    {
        "cartId": null,
        "message": "No active cart"
    }
    ```

### Get shopping cart totals
- **Method:** `GET`
- **Path:** `/api/cart/totals`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - You must send either the "Authorization" or "X-Cart-Token" header.
- **Response:**
    ```JAVASCRIPT
    {
        "total": {
            "cost": 3900,
            "items": 8
        }
    }
    ```

### Update shopping cart item's quantity
- **Method:** `PATCH`
- **Path:** `/api/cart/item/:item_id`
- **Data:**
    ```JAVASCRIPT
        {
            quantity: 2 // Optional, Defaults to 1 if no value sent
        }
    ```
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - You must send either the "Authorization" or "X-Cart-Token" header.
    - The items quantity will increase or decrease by the "quantity" received.
    - To decrease an items quantity send a negative number.
    - If the items quantity is less than 1 the item will be removed from the cart.
- **Response:**
    ```JAVASCRIPT
    {
        "cartId": "eb219d35-9a1f-492f-8b83-eab8660f3d74",
        "item": {
            "added": "2019-05-30T00:45:58.000Z",
            "each": 200,
            "itemId": "2edb2c46-2053-4c9b-8e3b-277bd2fba7e6",
            "name": "Purple Dream",
            "productId": "4d8f1fd1-1801-41a7-99ce-4b5865c4e143",
            "quantity": 4,
            "thumbnail": {
                "altText": "Berry cupcake",
                "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_2.jpg"
            },
            "total": 800
        },
        "message": "Added 2 Purple Dream cupcakes to cart",
        "total": {
            "cost": 800,
            "items": 4
        }
    }
    ```

### Set shopping cart item's quantity
- **Method:** `PUT`
- **Path:** `/api/cart/item/:item_id`
- **Data:**
    ```JAVASCRIPT
        {
            quantity: 3 // Optional, Defaults to 1 if no value sent
        }
    ```
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - You must send either the "Authorization" or "X-Cart-Token" header.
    - The items quantity will be set the the "quantity" received.
    - If the items quantity is set to less than 1 the item will be removed from the cart.
- **Response:**
    ```JAVASCRIPT
    {
        "cartId": "eb219d35-9a1f-492f-8b83-eab8660f3d74",
        "item": {
            "added": "2019-05-30T00:45:58.000Z",
            "each": 200,
            "itemId": "2edb2c46-2053-4c9b-8e3b-277bd2fba7e6",
            "name": "Purple Dream",
            "productId": "4d8f1fd1-1801-41a7-99ce-4b5865c4e143",
            "quantity": 3,
            "thumbnail": {
                "altText": "Berry cupcake",
                "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_2.jpg"
            },
            "total": 600
        },
        "message": "Set Purple Dream cupcakes quantity to 3",
        "total": {
            "cost": 600,
            "items": 3
        }
    }
    ```

### Delete item from cart
- **Method:** `DELETE`
- **Path:** `/api/cart/item/:item_id`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - You must send either the "Authorization" or "X-Cart-Token" header.
    - Item will be completely removed from cart
- **Response:**
    ```JAVASCRIPT
    {
        "cartId": "eb219d35-9a1f-492f-8b83-eab8660f3d74",
        "message": "Removed all Purple Dream items from cart",
        "total": {
            "cost": 1200,
            "items": 2
        }
    }
    ```

### Delete current cart
- **Method:** `DELETE`
- **Path:** `/api/cart`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Optional, see additional info below
        "X-Cart-Token": "cart token" // Optional, see additional info below
    }
    ```
- **Additional Info:**
    - You must send either the "Authorization" or "X-Cart-Token" header.
    - Cart and all items will be deleted
- **Response:**
    ```JAVASCRIPT
    {
        "message": "Cart deleted",
        "deletedId": "eb219d35-9a1f-492f-8b83-eab8660f3d74"
    }
    ```

### Delete specific cart (Requires Auth)
- **Method:** `DELETE`
- **Path:** `/api/cart/:cart_id`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Required, see additional info below
    }
    ```
- **Additional Info:**
    - You must send the "Authorization" header.
    - To delete a specific cart it must be a cart that belongs to the user
    - Cart and all items will be deleted
- **Response:**
    ```JAVASCRIPT
    {
        "message": "Cart deleted",
        "deletedId": "eb219d35-9a1f-492f-8b83-eab8660f3d74"
    }
    ```

## Order Endpoints

### Get all user's orders (Requires Auth)
- **Method:** `GET`
- **Path:** `/api/orders`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Required, see additional info below
    }
    ```
- **Additional Info:**
    - Must be signed in to access the user's orders
- **Response:**
    ```JAVASCRIPT
    {
        "orders": [
            {
                "itemCount": 8,
                "total": 6025,
                "createdAt": "2019-05-17T23:07:51.000Z",
                "id": "141b44e6-5379-468c-a978-8195fe922082",
                "status": "Pending"
            },
            {
                "itemCount": 18,
                "total": 10150,
                "createdAt": "2019-05-17T23:21:34.000Z",
                "id": "39ecb33e-f7bd-4213-a767-d91982e55e5f",
                "status": "Pending"
            },
            {
                "itemCount": 8,
                "total": 1600,
                "createdAt": "2019-05-18T18:18:48.000Z",
                "id": "47426637-fdf0-4393-90d5-4ccf6725c2c1",
                "status": "Pending"
            },
            {
                "itemCount": 8,
                "total": 1600,
                "createdAt": "2019-05-29T17:15:33.000Z",
                "id": "29d40d56-a753-4914-8ca3-84fecbea8f51",
                "status": "Pending"
            }
        ]
    }

### Get order details (Requires Auth)
- **Method:** `GET`
- **Path:** `/api/orders/:order_id`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Required, see additional info below
    }
    ```
- **Additional Info:**
    - Must be signed in to access order details, and be owner of requested order
- **Response:**
    ```JAVASCRIPT
    {
        "itemCount": 18,
        "total": 10150,
        "createdAt": "2019-05-17T23:21:34.000Z",
        "id": "39ecb33e-f7bd-4213-a767-d91982e55e5f",
        "status": "Pending",
        "items": [
            {
                "each": 575,
                "quantity": 6,
                "total": 3450,
                "id": "08901a1f-cfff-4df2-ae7d-837cd29fa7f1",
                "product": {
                    "name": "Pearl Rose",
                    "id": "bacef6bc-f50a-45ee-b1c7-f05945842bf8",
                    "thumbnail": {
                        "altText": "Red and yellow vanilla cupcake",
                        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_5.jpg"
                    }
                }
            },
            {
                "each": 775,
                "quantity": 4,
                "total": 3100,
                "id": "483359eb-c232-431d-bb9a-d6f8c390b24b",
                "product": {
                    "name": "Blueberry Malt Cake",
                    "id": "d2704033-6435-42c5-b7c4-c6543212a63b",
                    "thumbnail": {
                        "altText": "Blueberry cupcake piled high with toppings",
                        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_8.jpg"
                    }
                }
            },
            {
                "each": 450,
                "quantity": 8,
                "total": 3600,
                "id": "4ee3e1bd-1f71-411f-b0e8-68992d93b08b",
                "product": {
                    "name": "Double Lemon",
                    "id": "dcfcd0f9-2ae8-46a5-bf64-d41a2c84ad10",
                    "thumbnail": {
                        "altText": "Lemon cupcake with piled high lemon frosting",
                        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_9.jpg"
                    }
                }
            }
        ]
    }
    ```

### Create new order - Checkout (Requires Auth)
- **Method:** `POST`
- **Path:** `/api/orders`
- **Data:** `none`
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "Authorization": "user auth token" // Required, see additional info below
    }
    ```
- **Additional Info:**
    - Must be signed in to checkout with this route, for guest checkout see below
- **Response:**
    ```JAVASCRIPT
    {
        "message": "Your order has been placed",
        "id": "97747518-97c6-44e1-bb71-bbe34b6862f3"
    }
    ```

### Create new guest order - Guest Checkout
- **Method:** `POST`
- **Path:** `/api/orders/guest`
- **Data:**
    ```JAVASCRIPT
    {
        email: 'jane@example.com', // Required
        firstName: 'Jane', // Required
        lastName: 'Smith' // Required
    }
    ```
- **Query:** `none`
- **Headers:**
    ```JAVASCRIPT
    {
        "X-Cart-Token": "cart token goes here" // Required
    }
    ```
- **Additional Info:**
    - Must send basic user data to associate with order.
    - After checkout success, cart token will no longer be valid.
- **Response:**
    ```JAVASCRIPT
    {
        "message": "Your order has been placed",
        "id": "c7ea7018-3592-487b-96cf-25d89842f13f"
    }
    ```

### Get guest order details
- **Method:** `GET`
- **Path:** `/api/orders/guest/:order_id`
- **Data:** `none`
- **Query:** `?email=jane@example.com`
- **Headers:** `none`
- **Additional Info:**
    - Email must be the same email the order was created with
    - The order ID is the "id" you receive when you place a guest order
- **Response:**
    ```JAVASCRIPT
    {
        "itemCount": 8,
        "total": 3900,
        "createdAt": "2019-05-30T22:15:24.000Z",
        "id": "c7ea7018-3592-487b-96cf-25d89842f13f",
        "status": "Pending",
        "items": [
            {
                "each": 600,
                "quantity": 2,
                "total": 1200,
                "id": "3dbc4b28-5858-475d-8ce9-2df6f56c6c89",
                "product": {
                    "name": "Vanilla Stack Cake",
                    "id": "c17c4e65-ce9c-42b2-a8c6-1f51af5cd1b2",
                    "thumbnail": {
                        "altText": "Vanilla cupcake with vanilla frosting",
                        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_7.jpg"
                    }
                }
            },
            {
                "each": 450,
                "quantity": 6,
                "total": 2700,
                "id": "d9e9295c-67fb-4641-98cc-a69c510abc9f",
                "product": {
                    "name": "Double Lemon",
                    "id": "dcfcd0f9-2ae8-46a5-bf64-d41a2c84ad10",
                    "thumbnail": {
                        "altText": "Lemon cupcake with piled high lemon frosting",
                        "url": "http://api.sc.lfzprototypes.com/images/thumbnails/cupcake_sq_9.jpg"
                    }
                }
            }
        ]
    }
    ```

## User (Auth) Endpoints

### Create new User account
- **Method:** `POST`
- **Path:** `/auth/create-account`
- **Data:**
    ```JAVASCRIPT
    {
        email: 'jane@example.com', // Must be a valid email address
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
    - If the user creates a cart before creating an account, send the cart token in the headers with the create account request and the cart will be transferred to the newly created account.
- **Response:**
    ```JAVASCRIPT
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjMsInRzIjoxNTU5MTU5ODk0MDUzfQ.SZNcSeB8ZMABdLUX94dVl6XyomjOj-pgelSWTeQXLQI",
        "user": {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "pid": "1c2158a8-c5fb-4a61-8e10-cdc02a48635b"
        }
    }
    ```

### User sign in
- **Method:** `POST`
- **Path:** `/auth/sign-in`
- **Data:**
    ```JAVASCRIPT
    {
        email: 'jane@example.com',
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
    - If the user creates a cart before signing in, send the cart token in the headers with the create account request and the cart will be transferred to the user's account.
- **Response:**
    ```JAVASCRIPT
    {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjMsInRzIjoxNTU5MTYwNDUyNjgwfQ.c04btYz8m4fNa4UGkSwGHxd-mnrXNzCbMfpYFHWHB8U",
        "user": {
            "name": "Jane Doe",
            "email": "jane@example.com",
            "pid": "1c2158a8-c5fb-4a61-8e10-cdc02a48635b"
        }
    }
    ```

### User JWT sign in
- **Method:** `GET`
- **Path:** `/auth/sign-in`
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
            "email": "jane@example.com",
            "pid": "1c2158a8-c5fb-4a61-8e10-cdc02a48635b"
        }
    }
    ```
