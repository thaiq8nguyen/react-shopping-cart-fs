import express from "express";
import { json } from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import db from "../dbConfig";

const app = express();
app.use(cors());
app.use(helmet());
app.use(json());
app.use(morgan("dev"));

app.get("/products", (req, res, next) => {
  db("products")
    .select("id", "name", "price", "image_url")
    .then(products => {
      res.json(products);
    })
    .catch(next);
});

const port = 5000;

app.listen(port, () => {
  console.log(`Web API Listening on port ${port} `);
});
