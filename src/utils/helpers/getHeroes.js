import { marvelAPI } from "../../api/marvelAPI"

export const getHeroes = async() => {
    const {data} = await marvelAPI.get('/v1/public/characters?ts=1&apikey=6e182dc4f043b5d2f40a511bd4f327d3&hash=17edb9af70c6a96401560da19e08795d');

    const {results} = await data.data;

    const personajes = results.map(({id, name, thumbnail, comics}) => {
        const {path, extension} = thumbnail;
        
        return {
          id,
          name,
          image: `${path}.${extension}`,
          comics: comics.returned
        }
    })

    return personajes;
}