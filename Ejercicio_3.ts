import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";

enum Genero {
    terror="terror",
    comedia="comedia",
    clasico="clasico",
    drama="drama",
    policiaca="policiaca",
    novela="novela"
}

type Book = {

    id: number
    title: string
    author: string
    pages?: number
    genre: Genero

}

var biblioteca: Book[] = [
    {
        id: 1,
        title: "w",
        author: "string",
        pages: 33,
        genre: "terror"
    },
    {
        id: 2,
        title: "w",
        author: "string",
        pages: 33,
        genre: "terror"
    },
    {
        id: 3,
        title: "w",
        author: "string",
        pages: 33,
        genre: "comedia"
    }
    ] 

var op: string = "0"
var id: number = 3


const create = ()=>{

        
        var title: string = prompt("Titulo")
        var author: string =prompt("Autor")
        var pages: number =parseInt(prompt("Nº paginas")) 
        var genre: Genero =Genero[prompt("Genero: terror, comedia, clasico, drama, policiaca, novela") ]

        while (title===null || author===null || genre===undefined ) {

            if(title===null){

                title= prompt("Falta titulo: ")

            }else if(author===null){

                author =prompt("Falta Autor: ")

            }else{

                genre = Genero[prompt("Genero: terror, comedia, clasico, drama, policiaca, novela")]

            }
        }

        const book: Book = {
            id: id,
            title: title,
            author: author,
            pages: pages,
            genre: genre,
        }

        return book

}



while (parseInt(op)!==5) {
    
    op = prompt ("\n1 - Crear libro\n2 - Filtrar libro por género\n3 - Borrar libro\n4 - Ver libros\n5 - Salir\n")

    if (parseInt(op)===1) {
        id+=1;
        biblioteca.push(create())

    }else if(parseInt(op)===2){

        var gen: Genero =Genero[prompt("Genero: terror, comedia, clasico, drama, policiaca, novela") ]
        const lista_libros: Book[] = biblioteca.filter((elem)=>{
            return elem.genre===gen
        })
        .forEach(elem => {
            console.log("\n",elem,"\n")
        });

    }else if(parseInt(op)===3){

        var id: number =parseInt(prompt("Id para eliminar"))
        biblioteca = biblioteca.filter((elem)=>{
            return elem.id!==id
        })

    }else if(parseInt(op)===4){

        biblioteca.forEach((elem) => {

            console.log("\n",elem,"\n")
            
        });

    }else{

        console.log("Eleccion no posible\n");
        
    }     
}


