// See https://github.com/typicode/json-server#module
const cors = require('cors');
const jsonServer = require('json-server')
const server = jsonServer.create()
const auth = require("json-server-auth");
const db = require("./db.json");
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const routes = require('./routes.json');

server.use(cors())
server.use(middlewares)
server.db = router.db;
server.use(auth);
server.use(jsonServer.rewriter(routes));
server.use(router)

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})

// Export the Server API
module.exports = server

//json-server --watch db.json --routes routes.json


// 獲取單一 userId 所有訂閱資料  /users/:id/subscriptions": "/subscriptions?creator_id=:id",
//http://localhost:3000/users/u123/subscriptions