# Architecture

``` typescript
Client {
    id
    name
}

Courier {
    id
    name
}

Restaurant {
    id
    name
    menu
}

Order {
    restaurantId
    clientId
    courierId
    timeDelivery
    deliveryAmount
}
```
