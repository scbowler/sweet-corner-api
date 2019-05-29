# Sweet Corner API

## API Base URL
```
http://api.sc.lfzprototypes.com
```

## Product Endpoints

### Get all products
- **Method:** `GET`
- **Path:** `/api/products`
- **Query:** `none`
- **Headers:** `none`
- **Response:**
> ```JAVASCRIPT
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
                "url": "http://localhost:9000/images/thumbnails/cupcake_sq_1.jpg"
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
                "url": "http://localhost:9000/images/thumbnails/cupcake_sq_2.jpg"
            }
        }
    ]
}
```