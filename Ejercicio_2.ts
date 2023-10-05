
type Type = {
    name: string
}

type Types = {
    
    type: Type
}

type Pokemon = {
    name: string,
    id: number,
    types: Types[]
}

type Generation = {
    name: string,
    generation: Type
}

const llamada =async (busqueda,eleccion) => {
    try {
     
        const response = await fetch(`https://pokeapi.co/api/v2/${busqueda}/${eleccion}`);

        const data: Pokemon = await response.json();

        return data;

    } catch (error) {

        console.log("Error en el fetch /******/ ", error);

    }
}

const x = prompt("Quieres buscar:  pokemon -> 1 o tipo -> 2")

var eleccion = ""
var busqueda = ""

if(x==="1"){

    busqueda ="pokemon"
    eleccion = prompt("Please enter pokemon's name:");

}else{

    busqueda="type"
    eleccion = prompt("Please enter type's name:");

}



const lista = await llamada(busqueda,eleccion);


if(x==="1"){

    const pokemon = {
        name: lista.name,
        id: lista.id,
        types: lista.types.map((elem)=> {return elem.type.name})
    }
    
    console.log("\nname: " ,pokemon.name, "\ntipos: ", pokemon.types, "\nid: ",pokemon.id);

}else{

    const tipe = {
        name: lista.name,
        type: lista.generation.name
    }
    
    console.log("\nname: " ,tipe.name, "\ngeneration: ", tipe.type);

}



