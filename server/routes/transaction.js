import express from "express";
import fetchTransactions from "../controller/TransactionsController.js";
// import KPI from '../models/KPI.js';
const router = express.Router();
// export const kpiRoutes='test';
console.log('from fetchTransactions router')
router.get('/',fetchTransactions);

export default router;