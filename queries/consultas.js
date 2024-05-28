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


export { getData }