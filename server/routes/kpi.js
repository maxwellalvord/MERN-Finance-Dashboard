import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpi",  async (res, req) => {
  try {
    const kpis = await KPI.find();
    res.statusCode(200).json(kpis)
  } catch (error) {
    res.statusCode(404).json({ message: error.message});
  }
});


export default router;

