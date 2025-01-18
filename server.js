// See https://github.com/typicode/json-server#module
const cors = require('cors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
server.use(cors())
server.use(middlewares)
server.db = router.db;
server.use(auth);
server.use(router)

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})

// Export the Server API
module.exports = server