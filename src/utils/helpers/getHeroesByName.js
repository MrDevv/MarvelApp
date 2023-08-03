import { marvelAPI } from "../../api/marvelAPI"

export const getHeroesByName = async(character) => {
    const {data} = await marvelAPI.get(`/v1/public/characters?name=${character}&ts=1&apikey=6e182dc4f043b5d2f40a511bd4f327d3&hash=17edb9af70c6a96401560da19e08795d`);

    const {results} = await data.data;

    if (results.length > 0) {
        const {id, name, thumbnail, comics} = results[0]
        const {path, extension} = thumbnail
        return [{
            id,
            name,
            image: `${path}.${extension}`,
            comics: comics.returned
        }]
    }
    return [];
}