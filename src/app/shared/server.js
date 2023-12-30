const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Add middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Use default router
server.db = router.db;
server.use('/api', router);

// Use authentication
server.db = auth(server.db);

// Start server
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server with Auth is running on http://localhost:${port}`);
});
