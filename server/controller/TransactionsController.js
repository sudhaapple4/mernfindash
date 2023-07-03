import KPI from '../models/KPI.js';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

// import KPI from '../models/KPI';
const dbName = "finance";
const client = new MongoClient(process.env.MONGO_URL);
client.connect()
const db = client.db(dbName);
const col = db.collection('transactions');
const fetchTransactions = async (req, res) => {
    console.log('---------------------------------from fetch Products')
    try {
        const trans = await col.findOne({});
        console.log('------------------trans ',trans)
        res.status(200).json(trans);
        // res.send('hi')
      } catch (err) {
        console.log('------------------errr ',err)
        res.status(400).json(err);
    
      }
    };

export default fetchTransactions;