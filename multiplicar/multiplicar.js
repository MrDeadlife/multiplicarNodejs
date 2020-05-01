//requireds
const fs = require('fs');
const colors = require('color');

// const fs = require('express);
// const fs = required('./fs');


let listarTabla = (base, limite = 10) => {
    console.log('================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('=================').green;
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} no es valido`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor ${limite} no es valido`);
            return;
        } else {
            for (i = 1; i <= limite; i++) {
                console.log(`${base} * ${i} = ${base * i}\n`)
            }
        }
        console.log('===================')
    });
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        } else {

            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += `${base} * ${i} = ${base * i}\n`;

            }
            fs.writeFile(`tabla${base}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla${base}.txt`)
                console.log('The file has been saved!');
            });
        }
        /* 
        let data = '';
        
        for (tabla; tabla <= 10; tabla++) {
            for (multi = 1; multi <= 10; multi++) {
                data += `${tabla} * ${multi} = ${tabla * multi} \n `
            }
        }*/

    });
}

//exportamos la funcion crear archivo
module.exports = {
    crearArchivo,
    listarTabla
}