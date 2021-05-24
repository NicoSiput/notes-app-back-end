const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// FRONTEND WEB: http://notesapp-v1.dicodingacademy.com/
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'http://172.31.28.27/',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
