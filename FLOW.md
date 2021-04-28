# Architecture

``` typescript
Client {
    id
    name
    orderList
}

Courier {
    id
    name
    orderList
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
