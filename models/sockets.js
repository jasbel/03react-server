const BandList = require('./band-list');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('cliente conectado');

            //emitir al cliente todas las bandas
            socket.emit('current-bands', this.bandList.getBands());

            // Escuchar evento: mensaje-to-server
            /* socket.on('mensaje-to-server', ( data ) => {
                console.log( data );
                this.io.emit('mensaje-from-server', data );
            }); */
            
        
        });
    }


}


module.exports = Sockets;