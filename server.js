// Declaring dependencies

const express = require('express');
const app = express();
const mysql = require ('mysql2');
const dotenv = require ('dotenv');
const cors = require ('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

// Connect to the database

const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

// Check if db works
//If it fails to connect
db.connect(err => {
    if (err) {
     return console.log('Error connecting to the mysql db:', err);
    }
// If it connects succesfully
  console.log('Connected to mysql succesfully as id:', db.threadId);

    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`);
// Send a message to the browser
        console.log('Sending message to browser...');
        app.get('/', (req,res) => {
            res.send('Server started succesfully!')
     })
   });
});