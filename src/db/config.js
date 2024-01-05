import mysql2 from "mysql2/promise";
import dotenv from 'dotenv'

dotenv.config();

const db = mysql2.createPool({
    host: "localhost",
    user: process.env.USER_DB,
    password: "",
    database: process.env.DATABASE,
});

export default db;