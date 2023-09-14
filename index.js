const fs = require('fs');


async function leerArchivoComoString(){
    try {
        let archivo = await fs.readFileSync('../TEXTO.txt', 'utf-8') 
        console.log(archivo)

    }catch(error){
        console.log(`Error en operacion sincronica de lectura / escritura: ${error.message}`)
    }
}

async function escribirTextoEnArchivo(ruta, texto, flag){
    try{
        fs.access(ruta)
        fs.writeFile(ruta,texto)
        console.log("Texto grabado en el archivo de ruta ", ruta)
    }catch(error){
        console.log(`Error en operacion sincronica de lectura / escritura: ${error.message}`)
        if(flag){
            fs.appendFile(ruta, texto)
            console.log("Archivo creado")
        }else{
            console.log("El archivo no existe")
        }
    }
}

function transformarStringEnArrayDeNumeros(texto, separador){
    const elementos = texto.split(separador)
    const arrayElementos = []
    for(const element in elementos){
        if(typeof element !== 'string'){
            arrayElementos.push(element)
        }
    }
}

function transformarArrayDeNumerosAUnSoloString(array, separador){
    const stringUnido = array.join(separador);
    console.log(stringUnido)
}

function combinarDosArrays(array1,array2){
    const arraysCombinados = [new Set([array1].concat([array2]))];
    const arrayRes = arraysCombinados.sort((a, b) => a - b);
    console.log(arrayRes)
  
}

function combinarNArrays(array){
    const arraysCombinados = [new Set(array.flat())];
    const arrayRes = arraysCombinados.sort((a,b) => a - b)
    console.log(arrayRes)
}

