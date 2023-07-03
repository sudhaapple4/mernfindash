import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { MongoClient } from 'mongodb';
import kpiRoutes from "./routes/kpi.js";
import productRoutes from "./routes/product.js"
import fetchTransactions from "./controller/TransactionsController.js";
// import KPI from "./models/KPI.js";
import Products from "./models/Product.js";
import { kpis, products, transactions } from "./data/data.js";


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/kpi", kpiRoutes);
app.use("/products",productRoutes);
app.use("/transactions",fetchTransactions)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
const dbName = "finance";
const client = new MongoClient(process.env.MONGO_URL);
client
  .connect()
  .then(async () => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    console.log("Successfully connected to Atlas");
    // const db = client.db(dbName);
    // db.createCollection('transactions')
    // const col = db.collection('transactions');
    // const p = await col.insertMany(transactions);
    // const myDoc = await col.findOne();
    // console.log(myDoc);
  })
  .catch((error) => console.log(`${error} did not connect`));

