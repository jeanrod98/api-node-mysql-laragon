import db from "../db/config.js"

const consultarUsuarios = async (req, res) => {

    // consultamos los usuarios
    const [row] = await db.query("SELECT * FROM users");
    res.json(row);
   
    
}

export {
    consultarUsuarios
}