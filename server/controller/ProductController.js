import KPI from '../models/KPI.js';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

// import KPI from '../models/KPI';
const dbName = "finance";
const client = new MongoClient(process.env.MONGO_URL);
client.connect()
const db = client.db(dbName);
const col = db.collection('Products');
const fetchProducts = async (req, res) => {
    console.log('---------------------------------from fetch Products')
    try {
        const products = await col.findOne({});
        res.status(200).json(products);
        // res.send('hi')
      } catch (err) {
        console.log('------------------errr ',err)
        res.status(400).json(err);
    
      }
    };

export default fetchProducts;