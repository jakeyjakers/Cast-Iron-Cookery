require(`dotenv`).config()
const {SECRET} = process.env
const {User} = require(`../models`)
const bcrypt = require(`bcryptjs`)
const jwt = require(`jsonwebtoken`)


const createToken = (username, id) => {
  return jwt.sign({ username: username, id: id }, SECRET, { expiresIn: "2d" });
};

module.exports = {
    login: async (req, res) => {
        console.log(`coming from login, in auth.js`)

        try {
            const {username, password} = req.body
            let foundUser= await User.findOne({where: {username : username}})
            if (foundUser) {
                const isAuthenicated = bcrypt.compareSync(
                    password,
                    foundUser.passwordhash
                )

                if(isAuthenicated) {
                    const token = createToken(
                        foundUser.dataValues.username,
                        foundUser.dataValues.id
                    )
                    const exp = Date.now() + 1000 * 60 * 60 * 48
                    res.status(200).send({
                        username: foundUser.dataValues.username,
                        userId: foundUser.dataValues.id,
                        token,
                        exp
                    })
                } 
                else {
                    res.status(400).send(`Cannot log in. Invalid username or password`)
                }
            } 
            else {
                res.status(400).send(`Cannot log in. Invalid username or password`)
            }
           
        } catch(error) {
            console.log(`ERRROR`, `error in login`)
            console.log(error)
            resStatus(400)
        }

    },
    register: async (req, res) => {
        console.log(`coming from register, in auth.js`)

        try {
            const { username, password } = req.body
            let foundUser = await User.findOne({where: {username: username}})
            if(foundUser) {
                res.status(200).send(`That user already exists. Please choose another username.`)
            } 
            else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password, salt)
                const newUser = await User.create({
                    username: username,
                    passwordhash: hash,

                })
                const token = createToken(
                    newUser.dataValues.username,
                    newUser.dataValues.id
                )
                console.log(`TOKEN CREATED`, token)
                const exp = Date.now() + 1000 * 60 * 60 * 48
                res.status(200).send({
                    username: newUser.dataValues.username,
                    userId: newUser.dataValues.id,
                    token,
                    exp
                })
            }
        } catch(error) {
            console.log(`ERROR in register`)
            console.log(error)
            res.sendStatus(400)
        }

    }
}
