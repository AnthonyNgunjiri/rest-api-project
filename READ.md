
# Product Management Rest API

## Introduction

This REST API allows you to manage products in a PostgreSQL database. You can create, read, update, and delete products.
This README file provides a detailed guide on how to set up and use your REST API, including the necessary environment variables, API endpoints, and paths to the relevant code files for middleware and manager logic.
**NOTE** 
The  API can only fetch  dummy product with the id upto to 200 with other random products created by the user.
## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [Get All Products](#get-all-products)
  - [Get Single Product](#get-single-product)
  - [Create Product](#create-product)
  - [Update Product](#update-product)
  - [Delete Product](#delete-product)
- [Middleware](#middleware)
- [Manager](#manager)

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/product-api.git
   cd product-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your PostgreSQL credentials:
   ```env
   USER_PGS=postgres
   PASSWORD_PGS=tonie
   HOST_PGS=localhost
   PORT_PGS=5432
   DB_PGS=client_db
   ```

4. **Start the server**:
   ```bash
   npm start
   ```

## Environment Variables

Make sure you have the following environment variables set up in your `.env` file:

- `USER_PGS`: Your PostgreSQL username
- `PASSWORD_PGS`: Your PostgreSQL password
- `HOST_PGS`: Your PostgreSQL host
- `PORT_PGS`: Your PostgreSQL port
- `DB_PGS`: Your PostgreSQL database name

## API Endpoints

### Get All Products

- **URL**: `/`
- **Method**: `GET`
- **Description**: Retrieves a list of all products.

### Get Single Product

- **URL**: `/:id`
- **Method**: `GET`
- **URL Params**: `id=[integer]`
- **Description**: Retrieves a single product by its ID.

### Create Product

- **URL**: `/`
- **Method**: `POST`
- **Description**: Creates a new product. Expects a JSON body with the following fields:
  - `productThumbnail`: URL of the product thumbnail
  - `productTitle`: Title of the product
  - `productDescription`: Description of the product
  - `productCost`: Cost of the product
  - `onOffer`: Boolean indicating if the product is on offer

### Update Product

- **URL**: `/:id`
- **Method**: `PATCH`
- **URL Params**: `id=[integer]`
- **Description**: Updates an existing product by its ID. Expects a JSON body with any of the following fields:
  - `productThumbnail`: URL of the product thumbnail
  - `productTitle`: Title of the product
  - `productDescription`: Description of the product
  - `productCost`: Cost of the product
  - `onOffer`: Boolean indicating if the product is on offer

### Delete Product

- **URL**: `/:id`
- **Method**: `DELETE`
- **URL Params**: `id=[integer]`
- **Description**: Deletes a product by its ID.

## Middleware

The middleware validates the product data before processing it further.

- **File**: `middleware/middleware.js`
- **Function**: `validateProduct`

## Manager

The manager handles the logic for interacting with the database.

- **File**: `manager/manager.js`
- **Functions**:
  - `getAll`: Retrieves all products from the database.
  - `getSingle`: Retrieves a single product by its ID.
  - `createProduct`: Creates a new product.
  - `updateAproduct`: Updates an existing product by its ID.
  - `deleteProduct`: Deletes a product by its ID.

## Running the Project

1. Ensure you have a PostgreSQL database running and the connection details set up in your `.env` file.
2. Run the server using `npm start`.
3. Use a tool like Postman or curl to interact with the API endpoints.




