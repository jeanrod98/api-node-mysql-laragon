import mysql2 from "mysql2/promise";

const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "apicarros"
});

export default db;