# Proyecto Integrador Backend para NUCBA

## Descripción

Esta app provee los datos de los productos, usuarios y órdenes al frontend.

## Prestaciones

- Retrieve a list of products from the database.

## Technologies Used

- Typescript
- NodeJS
- Express
- MongoDB/Mongoose

## Endpoints

### Endpoints de Usuarios

#### POST /login: Inicia sesión de un usuario.

Parámetros:

```
usuario: nombre de usuario.
password: contraseña del usuario.
```

Respuesta:

```
token: token de autenticación.
userId: ID del usuario.
```

#### GET /userlist: Obtiene la lista de usuarios.

Parámetros: Ninguno.

Respuesta:

```
users: lista de usuarios.
```

#### POST /adduser: Crea un nuevo usuario.

Parámetros:

```
name: nombre del usuario.
email: correo electrónico del usuario.
password: contraseña del usuario.
role: rol del usuario (opcional, por defecto "user").
```

Respuesta:

```
message: mensaje de confirmación.
```

#### DELETE /deleteuser/:id: Elimina un usuario por ID.

Parámetros:

```
id: ID del usuario.
```

Respuesta:

```
message: mensaje de confirmación.
Endpoints de Productos
```

#### GET /productlist: Obtiene la lista de productos.

Parámetros: Ninguno.

Respuesta:

```
products: lista de productos.
```

#### GET /featuredproducts: Obtiene la lista de productos destacados.

Parámetros: Ninguno.

Respuesta:

```
products: lista de productos destacados.
```

#### POST /addproduct: Crea un nuevo producto.

Parámetros:

```
title: título del producto.
description: descripción del producto.
price: precio del producto.
category: categoría del producto.
thumbnail: imagen de portada del producto.
images: lista de imágenes del producto.
featured: indica si el producto es destacado.
```

Respuesta:

```
message: mensaje de confirmación.
```

#### PUT /updateproduct/:id: Actualiza un producto por ID.

Parámetros:

```
id: ID del producto.
title: título del producto.
description: descripción del producto.
price: precio del producto.
category: categoría del producto.
thumbnail: imagen de portada del producto.
images: lista de imágenes del producto.
featured: indica si el producto es destacado.
```

Respuesta:

```
message: mensaje de confirmación.
```

#### DELETE /deleteproduct/:id: Elimina un producto por ID.

Parámetros:

```
id: ID del producto.
```

Respuesta:

```
message: mensaje de confirmación.
Endpoints de Pedidos
```

#### GET /orders/:userId: Obtiene la lista de pedidos de un usuario por ID.

Parámetros:

```
userId: ID del usuario.
```

Respuesta:

```
orders: lista de pedidos.
```

#### POST /order: Crea un nuevo pedido.

Parámetros:

```
userId: ID del usuario.
items: lista de productos del pedido.
price: precio total del pedido.
shippingDetail: detalles de envío del pedido.
```

Respuesta:

```
message: mensaje de confirmación.
```

## Contact

Mail me to kricho at gmail dot com
