const User = require('../controller/user.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
    app.post("/api/register", User.register);
    app.post("/api/login", User.login);
    app.get("/api/user", authenticate, User.getAll);
    app.get("/api/libre", User.getAll);
    app.get("/api/salir", User.logout);
    app.post("/api/buscar", User.buscarEmail);
}

