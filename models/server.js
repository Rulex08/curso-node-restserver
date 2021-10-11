const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/usuarios'

    //Middlewares (funcion que siempre va a ejecutarse cuando se inicia el servidor)
    this.middlewares();
    //Application routes
    this.routes();
  }

  middlewares(){
    //CORS
    this.app.use( cors() );

    //Body parse and read
    this.app.use( express.json() );

    //Public directory
    this.app.use( express.static('public') );

  }

  routes() {
    this.app.use(this.usersPath, require('../routes/user'));
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo en puerto:', this.port);
    });
  }
}

module.exports = Server;
