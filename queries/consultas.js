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

const delSong = async(id) => {
    try {
        const consulta = {
            text: 'DELETE FROM canciones WHERE id=$1',
            values: [id]
        };
    const response = await pool.query(consulta);//resultado de la consulta
    if (response.rowCount == 0) {
        throw new Error ('Canción no eliminada');
        };
        return response.rows;
    } catch (error) {
        console.log(error.message);
    };
}

const updateSong = async(cancion) => {
    try {
        const consulta = {
            text: 'UPDATE canciones SET titulo=$1, artista=$2, tono=$3 where id=$4 RETURNING *',
            values: cancion
        }
        const response = await pool.query(consulta);
        return response.rows;
    } catch (error) {
        console.log(error.message)
    };
};

export { getData, addSong, delSong, updateSong }