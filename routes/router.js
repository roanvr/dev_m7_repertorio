import express from 'express';
const router = express.Router();
import path from 'path';
const __dirname = import.meta.dirname;
import pool from '../config/db.js';

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/date', async (req,res) => {
    const result = await pool.query('select now()');
    res.send(result);
});

export default router;