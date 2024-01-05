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

export {
    consultarCarros,
    registrarCarros
}