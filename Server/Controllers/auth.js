


// const createToken = (username, id) => {
//   return jwt.sign({ username, id }, SECRET, { expiresIn: " 2days" });
// };

module.exports = {
    login: (req, res) => {
        console.log(`coming from login, in auth.js`)
    },
    register: (req, res) => {
        console.log(`coming from register, in auth.js`)
    }
}
