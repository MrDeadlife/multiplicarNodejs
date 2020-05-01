const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//la posicion 1 del argv que es donde esta guardado el comando que mandamos  
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        console.log('Listar');
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo} `))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);

//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
//console.log(base);
//let argv2 = process.argv;
//console.log('Limite', argv.limite);
//crearArchivo(base)
//   .then(archivo => console.log(`Archivo Creado: ${archivo} `))
//  .catch(err => console.log(err));
// SE EJECUTA CON node saveintext --base #tabla que queremos
/* guardar tabla en documento
    //requireds
const fs = require('fs');
// const fs = require('express);
// const fs = required('./fs')

let data = '';
for (tabla = 1; tabla <= 10; tabla++) {
    for (multi = 1; multi <= 10; multi++) {
        data += `${tabla} * ${multi} = ${tabla * multi} \n `
    }
}
fs.writeFile('tablaMultiplicar.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
    */