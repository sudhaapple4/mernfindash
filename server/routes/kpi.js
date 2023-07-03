import express from "express";
import fetchKPIs from "../controller/KPIController.js";
// import KPI from '../models/KPI.js';
const router = express.Router();
// export const kpiRoutes='test';
console.log('from fetchKPIs router')
router.get('/',fetchKPIs);

export default router;