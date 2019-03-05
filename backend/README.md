# Backend API 

Startup: *yarn server*

---

## Users

### Returns:
```json
  {
    "user_id": 3,
    "auth_id": "cdef345",
    "email": "user3@none.com",
    "type": "0",
    "billing_date": null
  }
```

### Routes:
* **/api/user**       -- Get list of all users
* **/api/user/:id**   -- Get one user

---

## Recipes

### Returns:
```json
{
    "recipe_id": 1,
    "name": "Fluffy Pancakes",
    "image": "https://images.media-allrecipes.com/userphotos/720x405/5079227.jpg",
    "link": "https://www.allrecipes.com/recipe/162760/fluffy-pancakes/?internalSource=hub%20recipe&referringId=78&referringContentType=Recipe%20Hub",
    "ingredients": [
        {
            "id": 1,
            "amount": 0.75,
            "measurement": "cup",
            "name": "milk"
        },
        ...
    ],
    "directions": [
        {
            "order": 1,
            "directions": "Combine milk with vinegar in a medium bowl and set aside for 5 minutes to \"sour\"."
        },
        ...
    ]
}
```

### Routes:
* **/api/recipes/:id**   -- Get one complete recipe