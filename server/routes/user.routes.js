const User = require('../controller/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    app.post("/api/register", User.register);
    app.post("/api/login", User.login);
    //app.post("/api/generar", authenticate, User.generador);
    app.post("/api/generar", User.generador);
    app.get("/api/libre", User.getAll);
    app.get("/api/salir", User.logout);
    app.post("/api/user", User.buscarEmail);
}

