import db from "../db/config.js"

// Consultar Carros
const consultarCarros = async (req, res) => {

    // consultamos los usuarios
    const [row] = await db.query("SELECT * FROM carros");
    res.json(row);
   
    
}

// Registrar Carros
const registrarCarros = async (req, res) => {
    const { marca, modelo, anio, precio } = req.body;
    // console.log(req.body);

    // consultamos los usuarios
    const [row] = await db.query("INSERT INTO carros (marca, modelo, anio, precio) VALUES (?, ?, ?, ?)",
    [ marca, modelo, anio, precio ]);
    // console.log(row);

    res.json({ 
        affectedRows: row.affectedRows,
        id_car: row.insertId
     });
   
    
}

// Actualizad Carros 
const actualizarCarros = async (req, res) => {
    const { marca, modelo, anio, precio } = req.body;
    const { id } = req.params;
    // console.log(req.body);

    // consultamos los usuarios
    const [row] = await db.query("UPDATE carros SET marca=?, modelo=?, anio=?, precio=? WHERE id=?",
    [ marca, modelo, anio, precio, id ]);
    // console.log(row);

    res.json({ 
        affectedRows: row.affectedRows,
        serverStatus: row.serverStatus
     });
   
    
}
// Eliminar Carros 

const eliminarCarros = async (req, res) => {
    const { id } = req.params;
    // console.log(req.body);

    // consultamos los usuarios
    const [row] = await db.query("DELETE FROM carros WHERE id=?",
    [ id ]);
    // console.log(row);

    res.json({ 
        affectedRows: row.affectedRows,
        serverStatus: row.serverStatus
     });
   
    
}

export {
    consultarCarros,
    registrarCarros,
    actualizarCarros,
    eliminarCarros
}