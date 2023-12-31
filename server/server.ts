/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

type Product = {
  name: string;
  price: string;
  brand: string;
  details: string;
  imageUrl: string;
  size: string;
};

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.RDS_USERNAME}:${process.env.RDS_PASSWORD}@${process.env.RDS_HOSTNAME}:${process.env.RDS_PORT}/${process.env.RDS_DB_NAME}`;
const db = new pg.Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "details",
            "brand"
        from "products"
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/featured', async (req, res, next) => {
  try {
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "details",
            "brand"
        from "products"
        where "featured" = true
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:categoryId', async (req, res, next) => {
  try {
    const categoryId = Number(req.params.categoryId);
    if (!categoryId) {
      throw new ClientError(400, 'categoryId must be a positive integer');
    }
    const sql = `
      select
      "categoryId",
            "name",
            "price",
            "imageUrl",
            "details",
            "brand",
            "productId"
        from "products"
        where "categoryId" = $1
    `;
    const params = [categoryId];
    const result = await db.query<Product>(sql, params);
    if (!result.rows) {
      throw new ClientError(
        404,
        `cannot find product with categoryId ${categoryId}`
      );
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/productdetails/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      select "productId",
            "name",
            "price",
            "imageUrl",
            "brand",
            "details",
            "size"
        from "products"
        where "productId" = $1
    `;
    const params = [productId];
    const result = await db.query<Product>(sql, params);
    if (!result.rows[0]) {
      throw new ClientError(
        404,
        `cannot find product with productId ${productId}`
      );
    }
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.get('/api/productImages/:productId', async (req, res, next) => {
  try {
    const productId = Number(req.params.productId);
    if (!productId) {
      throw new ClientError(400, 'productId must be a positive integer');
    }
    const sql = `
      SELECT *
      FROM "images"
      WHERE "productId" = $1
    `;
    const params = [productId];
    const result = await db.query(sql, params);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// express code that inserts into the data base.

app.post('/api/cart', async (req, res, next) => {
  try {
    const { productId, quantity, size } = req.body;
    const checkCartQuery = `
      SELECT * FROM "cart"
      WHERE "productId" = $1 AND "size" = $2
    `;
    const checkCartParams = [productId, size];
    const checkResult = await db.query(checkCartQuery, checkCartParams);

    if (checkResult.rows.length > 0) {
      const updateCartQuery = `
        UPDATE "cart"
        SET "quantity" = "quantity" + $1
        WHERE "productId" = $2 AND "size" = $3
        RETURNING *
      `;
      const updateCartParams = [quantity, productId, size];
      const updateResult = await db.query(updateCartQuery, updateCartParams);

      res.json(updateResult.rows[0]);
    } else {
      const addToCartQuery = `
        INSERT INTO "cart" ("productId", "quantity", "size")
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      const addToCartParams = [productId, quantity, size];
      const insertResult = await db.query(addToCartQuery, addToCartParams);

      res.json(insertResult.rows[0]);
    }
  } catch (err) {
    next(err);
  }
});

app.get('/api/cart', async (req, res, next) => {
  try {
    const sql = `
      select "productId",
            "cartId",
            "quantity",
            "cart"."size",
            "name",
            "price",
            "brand",
            "imageUrl",
            "products"."categoryId"
        from "cart"
        join "products" using ("productId")
    `;
    const result = await db.query<Product>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/cart/:cartId', async (req, res, next) => {
  try {
    const cartId = Number(req.params.cartId);

    const sql = `
      delete
        from "cart"
        where "cartId" = $1
        returning *;
    `;
    const params = [cartId];
    const result = await db.query<Product>(sql, params);
    res.json(result.rows[0]);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// app.delete('/api/cart/all', async (req, res, next) => {
//   try {
//     console.log('hello');
//     const { productIds, cartId } = req.body;

//     for (let i = 0; i < productIds.length; i++) {
//       const sql = `
//       delete
//         from "cart"
//         where "productId" = $1
//         and "cartId" = $2
//         returning *;
//     `;
//       const params = [productIds, cartId];
//       const result = await db.query<Product>(sql, params);
//       res.sendStatus(204);
//     }
//   } catch (err) {
//     next(err);
//   }
// });

app.delete('/api/cart/all/:cartId', async (req, res, next) => {
  try {
    const cartId = Number(req.params.cartId);
    console.log(cartId);
    const sql = `
      delete
        from "cart"
        where "cartId" > $1
        returning *;
    `;
    const params = [0];
    const result = await db.query<Product>(sql, params);

    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.put('/api/cart/:cartId', async (req, res, next) => {
  try {
    const cartId = Number(req.params.cartId);
    const { quantity } = req.body;
    const sql = `
      update "cart"
        set
          "quantity" = $1
        where "cartId" = $2
        returning *;
    `;
    const params = [quantity, cartId];
    const result = await db.query<Product>(sql, params);
    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * Serves React's index.html if no api route matches.
 *
 * Implementation note:
 * When the final project is deployed, this Express server becomes responsible
 * for serving the React files. (In development, the Vite server does this.)
 * When navigating in the client, if the user refreshes the page, the browser will send
 * the URL to this Express server instead of to React Router.
 * Catching everything that doesn't match a route and serving index.html allows
 * React Router to manage the routing.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
