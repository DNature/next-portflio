const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);
app
  .prepare()
  .then(() => {
    const server = express();

    // server.get('/portfolio/:id', (req, res) => {
    //   const actualPage = '/portfolio';
    //   const queryParams = { id: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    server.get('*', (_req, _res) => {
      return handle(_req, _res);
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://127.0.0.1:3000');
    });
  })
  .catch(err => {
    console.log('> err: ', err.stack);
    process.exit(1);
  });
