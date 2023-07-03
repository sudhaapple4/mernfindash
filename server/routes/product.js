import express from "express";
import fetchProducts from "../controller/ProductController.js";
// import KPI from '../models/KPI.js';
const router = express.Router();
// export const kpiRoutes='test';
console.log('from fetchProducts router')
router.get('/',fetchProducts);

export default router;