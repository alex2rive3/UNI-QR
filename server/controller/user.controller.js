const { User } = require("../model/user.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
module.exports.register = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(() => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
};

module.exports.getAll = async (req, res) => {
    const getAll = await User.find({})
    res.json(getAll)
}
module.exports.logout = (req, res) => {
    try {
        res.clearCookie("userToken");
        res.json({ msg: "Cerraste la Session Correctamnete" });
    } catch (error) {
        res.status(400)
        res.json(error)
    }
}
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await User.findOne({ email: email })
        if (usuario === null) {
            return res.status(403).json({ msg: "Correo no encontrado" })
        }
        const isValid = await bcrypt.compare(password, usuario.password);
        if (isValid) {
            const secret = "clave sercret jwt"
            const newJWT = jwt.sign({
                _id: usuario._id,
                usuario: usuario.userName
            }, secret)
            res.cookie("userToken", newJWT, {
                httpOnly: true
            })
            res.json({ msg: "Logueado correctamente " })

        } else {
            return res.status(403).json({ msg: "Correo o contraseña Incorrecta" })
        }
    } catch (error) {
        res.status(400)
        res.json(error)
    }
}
module.exports.buscarEmail = async (req, res) => {
    console.log(req.body)
    const { email } = req.body
    const result = await User.findOne({ email: email })
    res.json(result)
}