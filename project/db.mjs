import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'A'
}).promise();

export async function getDetails() {
    try {
        // Execute query to select all records
        const [results] = await connection.query(
            'SELECT * FROM home_driver'
        );
        console.log(results);
        return results;
        } catch (err) {
        console.log(err);
        }
}

// Call the getDetails function
getDetails()