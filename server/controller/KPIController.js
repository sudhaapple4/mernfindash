import KPI from '../models/KPI.js';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

// import KPI from '../models/KPI';
const dbName = "finance";
const client = new MongoClient(process.env.MONGO_URL);
client.connect()
const db = client.db(dbName);
const col = db.collection('KPI');
const fetchKPIs = async (req, res) => {
    console.log('---------------------------------from fetch kpis')
    try {
        const kpis = await col.findOne({});
        res.status(200).json(kpis);
        // res.send('hi')
      } catch (err) {
        console.log('------------------errr ',err)
        res.status(400).json(err);
    
      }
    };

export default fetchKPIs;