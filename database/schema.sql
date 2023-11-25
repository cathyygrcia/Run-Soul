set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "orderDetails" (
  "orderId" serial PRIMARY KEY,
  "customerId" int,
  "productId" int,
  "quantity" int
);

CREATE TABLE "products" (
  "productId" serial PRIMARY KEY,
  "name" text,
  "brand" text,
  "price" int,
  "size" text,
  "details" text,
  "imageUrl" text,
  "featured" boolean,
  "categoryId" int
);

CREATE TABLE "customer" (
  "customerId" serial PRIMARY KEY,
  "firstName" text,
  "lastName" text,
  "email" text,
  "address" text
);

CREATE TABLE "cart" (
  "customerId" serial PRIMARY KEY,
  "quantity" int,
  "productId" int
);

CREATE TABLE "images" (
  "imagesId" serial PRIMARY KEY,
  "productId" int,
  "imageUrl" text
);

CREATE TABLE "category" (
  "categoryId" serial PRIMARY KEY,
  "name" text
);

ALTER TABLE "orderDetails" ADD FOREIGN KEY ("customerId") REFERENCES "customer" ("customerId");

ALTER TABLE "orderDetails" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");

ALTER TABLE "products" ADD FOREIGN KEY ("categoryId") REFERENCES "category" ("categoryId");

ALTER TABLE "cart" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");

ALTER TABLE "images" ADD FOREIGN KEY ("productId") REFERENCES "products" ("productId");
