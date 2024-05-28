import pool from '../config/db.js';

const getData = async () => {
    try {
        const consulta = {
            text: 'SELECT * FROM canciones',
        };
    const response = await pool.query(consulta);
    return response.rows
    } catch (error) {
        console.log(error.code, error.message);
    };
};

const addSong = async(cancion) => {
    try {
        const consulta = {
            text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1,$2,$3) RETURNING *',
            values: cancion,
        }
    const response = await pool.query(consulta);
    return response.rows;
    } catch (error) {
        console.log(error.message);
    };
}

export { getData, addSong }