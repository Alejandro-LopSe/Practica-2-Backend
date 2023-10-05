
type quote = {
    Genero: string,
    Autor?: string,
    Quote: String
}

type ResponseData = {

    data: quote[]

}



const llamada =async (page) => {
    try {
        
        const response = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?page=${page}`);

        const data: ResponseData =await response.json();

        return data.data;

    } catch (error) {

        console.log("Error en el fetch /******/ ", error);

    }
}

const convertir = (elem) => ({

    Genero: elem.quoteGenre,
    Autor: elem.quoteAuthor,
    Quote: elem.quoteText

})


const quotes1: quote[] = await llamada(1);
const quotes2: quote[]= await llamada(2);
const quotes3: quote[] = await llamada(3);

const arr_quotes: quote[] = [ ]

quotes1.map(convertir).forEach((elem) => {
    arr_quotes.push(elem)
    console.log("--id: ",arr_quotes.length,"  --Genero: ", elem.Genero,"  --Autor: ", elem.Autor, "  --Quote: ",elem.Quote,"\n");
});

quotes2.map(convertir).forEach((elem) => {
    arr_quotes.push(elem)
    console.log("--id: ",arr_quotes.length,"  --Genero: ", elem.Genero,"  --Autor: ", elem.Autor, "  --Quote: ",elem.Quote,"\n");
});

quotes3.map(convertir).forEach((elem) => {
    arr_quotes.push(elem)
    console.log("--id: ",arr_quotes.length,"  --Genero: ", elem.Genero,"  --Autor: ", elem.Autor, "  --Quote: ",elem.Quote,"\n");
});