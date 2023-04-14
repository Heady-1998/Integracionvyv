let env = require("../config/env")
const JWT_PASS_SECRET = env.JWT_PASS_SECRET
module.exports = {
  ensureToken(req, res, next) {

    //Recipción de token
    const tokenApi =
      req.body.token ||
      req.query.token ||
      req.headers["x-access-token"] ||
      req.params.token;
    if (tokenApi) {
      const jwt = require("jsonwebtoken");
      const jwtdecoded = tokenApi
      jwt.verify(jwtdecoded, JWT_PASS_SECRET, (err, decoded) => {
        if (!err) {
          req.body = decoded;
          console.log(decoded)
          //console.log("token", decoded);
          return next();
        } else {
          console.log(err);
          return res.status(401).json({
            status_code: 401,
            msg: "Token no es válido: " + err,
            data: null,
          });
        }
      });
    } else {
      return res.status(401).json({
        status_code: 401,
        msg: "Token está vacio",
        data: null,
      });
    }
  },
};
