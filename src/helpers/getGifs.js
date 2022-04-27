import { useCounter } from "../hooks/useCounter";


export const fetchGifs = async(url, counter) => {

    const resultsLimit = 8;
    const offset = counter - 1;

    try {
        const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=GEc8PKlr63Kr9i8EBjWKgmTBJ6x2lnYU&q=${encodeURI(url)}&offset=${offset * resultsLimit}&limit=${resultsLimit}`);
        const {data} = await result.json();
        const gifs = data.map((element) => {
            return {
                gif: element.images?.original?.url,
                title: element.title,
            }
        });

        return gifs;
    } catch (error) {
        console.log(error);
    };
};