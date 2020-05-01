const opts = {
    base: {
        demand: true, //hace que base sea requerido
        alias: 'b', //hace que base tenga  un alias *b*
    },
    limite: {
        alias: 'l',
        default: 10 // deja por defecto el limite de 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opts)
    //comando / mensaje de ayuda node app -help
    .command('Crear', 'Guarda en documento de texto la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}