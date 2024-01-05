import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;

  // valida que exista la authorizacion

  if (authorization) {
    const token = authorization.split(" ");

    // validar que el token tenga la palabra de seguridad bearer
    if (token[0] === "Bearer") {
      try {
        // valida que el token sea valido
        if (jwt.verify(token[1], process.env.SECRET)) next();
      } catch (error) {
        return res.json({
          msg: "Accesso Denegado: token invalido",
        });
      }
    } else {
      return res.json({
        msg: "Accesso Denegado",
      });
    }
  } else {
    return res.json({
      msg: "Accesso Denegado: debe envia un token de validacion",
    });
  }
};
