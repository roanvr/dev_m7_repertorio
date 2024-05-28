import express from 'express';
const router = express.Router();
import path from 'path';
const __dirname = import.meta.dirname;
import pool from '../config/db.js';
import { getData, addSong } from '../queries/consultas.js'

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'))
});

router.get('/date', async (req,res) => {
    const result = await pool.query('select now()');
    res.send(result);
});

router.get('/canciones', async (req,res) => {
    const result = await getData();
    console.log(result);
    res.json(result);
})

router.post('/cancion', async(req,res) => {
    const { titulo, artista, tono } = req.body
    const cancion = [titulo, artista, tono];
    const result = await addSong(cancion);
    res.json(result)
})

export default router;