# Architecture

``` typescript
Client {
    id
    name
    role
    orderList
}

Courier {
    id
    name
    role
    orderList
}

Restaurant {
    id
    name
    Menu
}

Menu {
    id
    product
    cost
}

Order {
    restaurantId
    clientId
    courierId
    Products
    amount
    timeDelivery
    deliveryAmount
}
```
